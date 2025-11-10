
import AuthorMeetSection from "../components/Author/AuthorStorySection";
import AuthorApproachSection from "../components/Author/AuthorApprochSection";
import AuthorFeaturedBooksSection from "../components/Author/AuthorInPracticeSection";
import AuthorHeroSection from "../components/Author/AuthorHeroSection";


const Author = () => {
  return (
    <div>
      <AuthorHeroSection />
      <AuthorMeetSection />
      <AuthorApproachSection />
      <AuthorFeaturedBooksSection />
    
    </div>
  );
};

export default Author;
