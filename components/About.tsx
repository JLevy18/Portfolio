import { FaCode, FaCoffee, FaGraduationCap } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import Timeline from "./Timeline";

const About = () => {

    const [coffeesBrewed, setCoffeesBrewed] = useState('...');
    const [linesWritten, setLinesWritten] = useState('...');
    const [commitsPushed, setCommitsPushed] = useState('...');

    useEffect(() => {

        const fetchCommitsCount = async () => {
            const username = 'JLevy18';
            try {
                const response = await axios.get<{ totalCommits: number }>(`/api/fetchCommits`, {
                    params: { username }
                });
                const { totalCommits } = response.data;
                setCommitsPushed(formatNumberWithCommas(totalCommits));
            } catch (error) {
                console.error('Error fetching commits:', error);
                setCommitsPushed('Error');
            }
        };

        const fetchLinesWritten = async () => {
            const username = 'JLevy18';
            try {
                const response = await axios.get<{ totalLines: number }>(`/api/fetchLinesWritten`, {
                    params: { username }
                });
                const { totalLines } = response.data;
                setLinesWritten(formatNumberWithCommas(totalLines));
            } catch (error) {
                console.error('Error fetching lines written:', error);
                setLinesWritten('Error');
            }
        };

        const calculateCoffeesBrewed = () => {
            const startDate = new Date('2022-04-30');  // Undergraduate Commencement Date
            const endDate = new Date();
            const weekdaysCount = countWeekdays(startDate, endDate);
            const totalCoffees = weekdaysCount * 2;
            setCoffeesBrewed(formatNumberWithCommas(totalCoffees));
        };

        fetchCommitsCount();
        fetchLinesWritten();
        calculateCoffeesBrewed();
    }, []);


    return (
        <div className="about-wrapper">
            <div className="stats-container">
                <div className="stat-container">

                    <h1>{coffeesBrewed}</h1>
                    <div className="stat-icon-container">
                        <FaCoffee style={{ width: '100%', height: '100%', color: "#EFECE5" }} />
                    </div>
                    <h2>Coffees Brewed</h2>
                </div>
                <div className="stat-container">

                    <h1>{linesWritten}</h1>
                    <div className="stat-icon-container">
                        <FaCode style={{ width: '100%', height: '100%', color: "#EFECE5" }} />
                    </div>
                    <h2>Lines Written</h2>
                </div>
                <div className="stat-container">

                    <h1>{commitsPushed}</h1>
                    <div className="stat-icon-container scale-90">
                        <FaCodePullRequest style={{ width: '100%', height: '100%', color: "#EFECE5" }} />
                    </div>
                    <h2>Commits Pushed</h2>
                </div>
            </div>

            <div className="timeline-wrapper">
                <div className="timeline-header-container">
                    <h1><text>Lets</text><p>travel back in time...</p></h1>
                </div>
                <Timeline startYear={2015} />
            </div>

        </div>
    )
}

export default About;

/**
 * Formats a number with commas as thousand separators.
 * @param num - The number to format.
 * @returns A string representing the formatted number.
 */
function formatNumberWithCommas(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function countWeekdays(startDate: Date, endDate: Date): number {
    let count = 0;
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday (0) or Saturday (6)
            count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
};