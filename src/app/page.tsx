import { Menu } from '../components/organisms/Menu';
import { DiscountTemplate } from '../components/templates/DiscountTemplate';

export default function Home() {
  return (
    <div className="m-auto flex min-h-[100vh] w-[100vw] items-start justify-center bg-white p-20">
      <DiscountTemplate>
        <Menu />
      </DiscountTemplate>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
