import * as ApiMyProfile from "@/pages/api/my/profile";

export const getMyProfileData: ApiMyProfile.GetReturn = {
  id: 1,
  name: "Bae Eonsu",
  bio: "프런트엔드 엔지니어. TypeScript와 UI 컴포넌트 테스트에 관심이 있습니다.",
  twitterAccount: "eonsu-bae",
  githubAccount: "eonsu-bae",
  imageUrl: "/__mocks__/images/img01.jpg",
  email: "eonsubae@example.com",
  likeCount: 1,
};
