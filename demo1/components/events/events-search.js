
import { useRef } from 'react';
import Button from "../ui/button";
import classes from "./events-search.module.css";
function EventSearch(props) {
    const searchMonth = useRef();
    const searchYear = useRef();

    function submitHandler (e) {
        e.preventDefault();
        const selectedYear = searchYear.current.value;
        const selectedMonth = searchMonth.current.value;

        // we expect onSearch function to be defined when including this component
        props.onSearch(selectedYear, selectedMonth);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={searchYear}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <lable htmlFor="month">Month</lable>
                    <select id="month" ref={searchMonth}>
                        <option value="1">January</option>
                        <option value="2">February</option><option value="1">January</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option> 
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>SEARCH</Button>
        </form>
    )
}
export default EventSearch;