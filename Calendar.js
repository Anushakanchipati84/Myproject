 import React,{Component} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        })
    } 
    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
    }
    getPreviousDate = () => {
        const currentDayInMilli = new Date(this.state.startDate).getTime()
        const oneDay = 1000 * 60 * 60 * 24
        const previousDayInMilli = currentDayInMilli - oneDay
        const previousDate = new Date(previousDayInMilli)
        this.setState({
            startDate: previousDate
        })
    }
    getNextDate = () => {
        const currentDayInMilli = new Date(this.state.startDate).getTime()
        const oneDay = 1000 * 60 * 60 * 24
        const nextDayInMilli = currentDayInMilli + oneDay
        const nextDate = new Date(nextDayInMilli)
        this.setState({
            startDate: nextDate


        })
    }

    render()
    {
    
        return (
        
            <div>
            <input className='open' type="button" value="<" onClick={this.getPreviousDate}></input>
                        <form onSubmit={this.onFormSubmit}>
                            <div className="calendar">
                                <DatePicker className='calendarbox'
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    name="startDate"
                                    dateFormat="E MMM dd yyyy 📅"/>
                            </div>
                            
                        </form>
                        <input className='close' type="button" value=">" onClick={this.getNextDate}></input>
                        </div>
        )
    }
}
    export default User ;

    