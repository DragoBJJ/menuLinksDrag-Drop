import { NavigationLinksTemplate } from '../components/templates/NavigationLinksTemplate';
import { NavLinksProvider } from '../context/useNavLinksContext';

export default function Home() {
  return (
    <div className="m-auto flex min-h-[100vh] w-full max-w-[100vw] items-start justify-center bg-white p-20">
      <NavLinksProvider>
        <NavigationLinksTemplate />
      </NavLinksProvider>
    </div>
  );
}
