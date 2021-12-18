import Link from 'next/link';
function TrainingListPage() {
    return (
        <div>
            <h2>Training List Page</h2>
            <Link href='/training/20211115'>20211115</Link>
            <br />
            <Link href='/training/20211115/rob/grace'>20211215 Rob Grace</Link>
        </div>
    );
}
export default TrainingListPage;
