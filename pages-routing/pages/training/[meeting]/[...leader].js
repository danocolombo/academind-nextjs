import { useRouter } from 'next/router';
function PortfolioProectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h2>Leader Page</h2>
        </div>
    );
}
export default PortfolioProectPage;
