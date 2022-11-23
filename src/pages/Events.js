import {useEffect, useState} from "react";
import datas from "../assets/datas/datas.json";

const Events = () => {
    const now = new Date().getTime()

    const [eventsItems, setEventsItems] = useState([])
    const [showEvents, setShowEvents] = useState("")


    useEffect(() => {
        // ON TRIE PAR DATE
        setEventsItems(datas.sort((a, b) => a.id - b.id))
        setShowEvents(eventsItems
            .map(item => {
                const eventMoment = new Date(item.year, item.month, item.day).getTime()

                // ON CALCULE L'ÉCART ENTRE 2 DATES
                const ecart = (eventDate, today) => {
                    const result = eventDate - today
                    // console.log(result)
                    let seconds = Math.floor(result / 1000),
                        minutes = Math.floor(seconds / 60),
                        hours = Math.floor(minutes / 60),
                        days = Math.floor(hours / 24),
                        months = Math.floor(days / 30),
                        years = Math.floor(days / 365);

                    seconds %= 60;
                    minutes %= 60;
                    hours %= 24;
                    days %= 30;
                    months %= 12;

                    return (
                        <span className={`eventItem 
                        ${days<8 && months<1 && years<1 ? "warning" : ""}`}>
                        <span style={{color: "crimson"}}>{years === 0 ? "" : years + " ans "}</span>
                        <span style={{color: "cornflowerblue"}}>{months === 0 ? "" : months + " mois "}</span>
                        <span style={{color: "lightseagreen"}}>{days + " jours "}</span>
                        <span
                            style={{color: "lightcoral"}}>{hours < 10 ? "0" + hours : hours}h{minutes < 10 ? "0" + minutes : minutes}</span>
                        </span>
                    )
                }

                return (
                    <div key={item.id} className={`${eventMoment - now <= 0 ? "tooLate" : ""} text-xl flex justify-between md:flex-row flex-col md:w-1/2`}>
                        <div className="font-mono my-3 md:mb-0">{item.event}</div>
                        <div className="font-bold font-mono mb-6">{ecart(eventMoment, now)}</div>
                    </div>
                )
            }))
    }, [eventsItems, now])


    return (

        <div className="flex flex-col items-center mt-16 md:mt-28 pb-12">
            <h1 className="font-mono text-center text-3xl font-bold mb-3 py-2">Events to come...</h1>
            <div className="tableau">

                {showEvents}

            </div>
        </div>

    );
};

export default Events;