// ─────────────────────────────────────────────────────────────
//  Firebase 접속 정보  (프로젝트: prayer-requests-9d290 / 앱 닉네임: pray)
//  2026-08-10 입력 완료. 다시 볼 일은 거의 없다.
//
//  다시 확인할 곳: Firebase 콘솔 → ⚙️ 프로젝트 설정 → 내 앱 → pray
// ─────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey: "AIzaSyBAY23Egx4F3R8K-G5dh9oZBZrZzfmREtY",
  authDomain: "prayer-requests-9d290.firebaseapp.com",
  projectId: "prayer-requests-9d290",
  storageBucket: "prayer-requests-9d290.firebasestorage.app",
  messagingSenderId: "1035359222112",
  appId: "1:1035359222112:web:feaae8bd9daaabbdb84605"
};

// 참고: 위 값들은 비밀번호가 아니다. 웹에 공개되는 게 정상이고,
// 실제 접근 통제는 firestore.rules 파일이 담당한다.
