import Link from 'next/link';
function TrainingMeetingPage() {
    const attendees = [
        { id: 2323, name: 'Rob' },
        { id: 4442, name: 'John' },
    ];
    return (
        <div>
            <h2>Training Meeting</h2>
            {attendees.map((a) => (
                <li key={a.id}>
                    <Link href={`/training/20211115/${a.name}`}>{a.name}</Link>
                </li>
            ))}
        </div>
    );
}
export default TrainingMeetingPage;
