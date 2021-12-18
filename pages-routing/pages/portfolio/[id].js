import { useRouter } from 'next/router';
function PortfolioProectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h2>Portolio Project Page</h2>
            <div>{router.query.id}</div>
        </div>
    );
}
export default PortfolioProectPage;
