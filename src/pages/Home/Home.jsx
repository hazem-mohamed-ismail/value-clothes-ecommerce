import CarouselHome from "../../components/home/CarouselHome/CarouselHome";
import ShopByCategories from "../../components/home/ShopByCategories/ShopByCategories";
import TopPicks from "../../components/home/TopPicks/TopPicks";
import CategoryGrid from "../../components/home/CategoryGrid/CategoryGrid";
import TopTrending from "../../components/home/TopTrending/TopTrending";
import Banners from "../../components/home/Banners/Banners";
import ServiceHighlights from "../../components/home/ServiceHighlights/ServiceHighlights";
import ReviewCard from "../../components/home/ReviewCard/ReviewCard";
import SubscriptionModal from "../../components/home/SubscriptionModal/SubscriptionModal";

export default function Home() {
  return (<>
    <SubscriptionModal />
    <CarouselHome />
    <ShopByCategories />
    <TopPicks />
    <CategoryGrid />
    <TopTrending />
    <Banners />
    <ReviewCard />
    <ServiceHighlights />
  </>)
}
