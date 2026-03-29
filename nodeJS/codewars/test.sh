#!/usr/bin/env zsh
set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"

print_usage() {
  cat <<'EOF'
Usage:
  ./test.sh <date-folder> [input-file]

Examples:
  ./test.sh 260322
  ./test.sh 260322 sample.txt

Rules:
  - 기본 실행 파일은 <date-folder>/solution.js
  - solution.js가 없으면 해당 폴더의 유일한 .js 파일 1개를 자동 사용
  - 입력 파일 기본값은 <date-folder>/input.txt
EOF
}

if [[ $# -lt 1 || $# -gt 2 ]]; then
  print_usage
  exit 1
fi

DATE_FOLDER="$1"
TARGET_DIR="$BASE_DIR/$DATE_FOLDER"
INPUT_NAME="${2:-input.txt}"

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "[ERROR] Folder not found: $TARGET_DIR"
  echo "[INFO] Available folders:"
  ls -1 "$BASE_DIR" | grep -E '^[0-9]{6}$' || true
  exit 1
fi

SOLUTION_FILE="$TARGET_DIR/solution.js"

if [[ ! -f "$SOLUTION_FILE" ]]; then
  JS_FILES=("$TARGET_DIR"/*.js(N))

  if [[ ${#JS_FILES[@]} -eq 1 ]]; then
    SOLUTION_FILE="${JS_FILES[1]}"
    echo "[WARN] solution.js가 없어 '${SOLUTION_FILE:t}' 파일로 실행합니다."
  else
    echo "[ERROR] '$TARGET_DIR'에서 실행할 파일을 찾지 못했습니다."
    echo "        - 권장: solution.js 파일명 사용"
    echo "        - 현재 .js 개수: ${#JS_FILES[@]}"
    [[ ${#JS_FILES[@]} -gt 0 ]] && printf '        - %s\n' "${JS_FILES[@]:t}"
    exit 1
  fi
fi

# describe/it 스타일 테스트 코드 감지
IS_TEST_STYLE=false
if grep -qE 'describe\(' "$SOLUTION_FILE" 2>/dev/null; then
  IS_TEST_STYLE=true
fi

if [[ "$IS_TEST_STYLE" == true ]]; then
  # describe/it/Test.assertEquals 폴리필을 앞에 붙여서 실행
  echo "[TEST] 테스트 스타일 감지 → describe/it/Test 폴리필 주입"
  echo "[RUN] node <polyfill> + ${SOLUTION_FILE#$BASE_DIR/}"
  node -e "
const fs = require('fs');
let passed = 0;
let failed = 0;
let currentSuite = '';
let currentTest = '';

const Test = {
  assertEquals(actual, expected) {
    if (actual === expected) {
      passed++;
      console.log('  ✅ PASS [' + currentSuite + ' > ' + currentTest + '] actual=' + actual);
    } else {
      failed++;
      console.log('  ❌ FAIL [' + currentSuite + ' > ' + currentTest + '] expected=' + expected + ', actual=' + actual);
    }
  }
};

function describe(name, fn) { currentSuite = name; fn(); }
function it(name, fn) { currentTest = name; fn(); }

const code = fs.readFileSync('$SOLUTION_FILE', 'utf8');
eval(code);

console.log('');
console.log('결과: ' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
"
else
  INPUT_FILE="$TARGET_DIR/$INPUT_NAME"
  FALLBACK_INPUT_FILE="$BASE_DIR/$INPUT_NAME"

  if [[ -f "$INPUT_FILE" ]]; then
    echo "[RUN] node ${SOLUTION_FILE#$BASE_DIR/} < ${INPUT_FILE#$BASE_DIR/}"
    node "$SOLUTION_FILE" < "$INPUT_FILE"
  elif [[ -f "$FALLBACK_INPUT_FILE" ]]; then
    echo "[WARN] 날짜 폴더 입력 파일이 없어 상위 입력 파일을 사용합니다: ${FALLBACK_INPUT_FILE#$BASE_DIR/}"
    echo "[RUN] node ${SOLUTION_FILE#$BASE_DIR/} < ${FALLBACK_INPUT_FILE#$BASE_DIR/}"
    node "$SOLUTION_FILE" < "$FALLBACK_INPUT_FILE"
  elif [[ ! -t 0 ]]; then
    echo "[INFO] 파이프로 전달된 stdin 입력을 사용합니다."
    echo "[RUN] node ${SOLUTION_FILE#$BASE_DIR/}"
    node "$SOLUTION_FILE"
  else
    echo "[ERROR] 입력이 없습니다."
    echo "        - 찾은 경로: ${INPUT_FILE#$BASE_DIR/}, ${FALLBACK_INPUT_FILE#$BASE_DIR/}"
    echo "        - 해결 방법 1: '$DATE_FOLDER/$INPUT_NAME' 파일 생성"
    echo "        - 해결 방법 2: ./test.sh $DATE_FOLDER < some_input.txt"
    exit 1
  fi
fi
