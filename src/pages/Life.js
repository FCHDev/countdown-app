import React, {useRef, useState} from 'react';

const Life = () => {
    const [name, setName] = useState("Toto")
    const [jour, setJour] = useState(12)
    const [mois, setMois] = useState(4)
    const [annee, setAnnee] = useState(1989)
    const [famVisible, setFamVisible] = useState(false)
    const [results, setResults] = useState(<div className="clignote">Résultats en attente...</div>)

    const nameRef = useRef()
    const anneeRef = useRef()
    const moisRef = useRef()
    const jourRef = useRef()

    const family = (<>
        <div className="border-2 border-black rounded-xl py-2 px-3 mb-3">
            <h3 className="text-xl font-bold">Sonia</h3>
            <span>{isOnEarth("Sonia", 1984, 5, 6)}</span>
            <br></br>
            <span>
                    Si on vit 30 000 jours, il lui reste donc {leftToLive(1984, 5, 6)} jours
                    à vivre.
                </span>
            <br></br>
            <span className="mort">Date probable du décès : {dateOfDeath(1984, 5, 6)}.</span>
        </div>

        <div className="border-2 border-black rounded-xl py-2 px-3 mb-3">
            <h3 className="text-xl font-bold">François</h3>
            <span>{isOnEarth("François", 1980, 0, 16)}</span>
            <br></br>
            <span>
                    Si on vit 30 000 jours, il lui reste donc {leftToLive(1980, 0, 16)}{" "}
                jours à vivre.
                </span>
            <br></br>
            <span className="mort">Date probable du décès : {dateOfDeath(1980, 0, 16)}.</span>
        </div>

        <div className="border-2 border-black rounded-xl py-2 px-3 mb-3">
            <h3 className="text-xl font-bold">Alexandre</h3>
            <span>{isOnEarth("Alexandre", 2015, 5, 25)}</span>
            <br></br>
            <span>
                    Si on vit 30 000 jours, il lui reste donc {leftToLive(2015, 5, 25)}{" "}
                jours à vivre.
                </span>
            <br></br>
            <span className="mort">Date probable du décès : {dateOfDeath(2015, 5, 25)}.</span>
        </div>

        <div className="border-2 border-black rounded-xl py-2 px-3 mb-3">
            <h3 className="text-xl font-bold">Marina</h3>
            <span>{isOnEarth("Marina", 2018, 11, 11)}</span>
            <br></br>
            <span>
                    Si on vit 30 000 jours, il lui reste donc {leftToLive(2018, 11, 11)}{" "}
                jours à vivre.
                </span>
            <br></br>
            <span className="mort">Date probable du décès : {dateOfDeath(2018, 11, 11)}.</span>
        </div>
    </>)

    const showResults = () => {
        setResults(
            <div className="border-2 border-black rounded-xl py-2 px-3 mb-3">
                <h3 className="text-xl mort-user">{name}</h3>
                <span>{isOnEarth(name, annee, mois - 1, jour)}</span>
                <br></br>
                <span>
                    Si on vit 30 000 jours, il lui reste donc {leftToLive(annee, mois - 1, jour)}{" "}
                    jours à vivre.
                </span>
                <br></br>
                <span className="mort-user">Date probable du décès : {dateOfDeath(annee, mois - 1, jour)}.</span>
            </div>
        )
    }

    const reset = () => {
        setResults(<div className="clignote">Résultats en attente...</div>)
        setName("")
        setJour(null)
        setMois(null)
        setAnnee(null)
        nameRef.current.value = ""
        jourRef.current.value = ""
        moisRef.current.value = ""
        anneeRef.current.value = ""
    }

    function isOnEarth(name = String, year, month, day) {
        const dateNaissance = new Date(year, month, day);
        const today = new Date();

        return (
            name +
            " est sur Terre depuis " +
            (
                (today.getTime() - dateNaissance.getTime()) /
                1000 /
                60 /
                60 /
                24
            ).toFixed(0) +
            " jours"
        );
    }

    function leftToLive(year, month, day) {
        const dateNaissance = new Date(year, month, day).getTime();
        const today = new Date().getTime();
        const daysOnEarth = ((today - dateNaissance) / 1000 / 60 / 60 / 24).toFixed(
            0
        );
        const leftDays = 30000 - daysOnEarth;

        return leftDays;
    }

    function dateOfDeath(year, month, day) {
        const dateNaissance = new Date(year, month, day);
        const dateNaissanceInMs = dateNaissance.getTime();
        const msInOneDay = 1000 * 60 * 60 * 24;
        const entireLifeInMs = 30000 * msInOneDay;
        const dateDeMort = new Date(dateNaissanceInMs + entireLifeInMs).toLocaleDateString();

        return dateDeMort;
    }



    return (
        <div className="flex flex-col items-center mt-16 md:mt-28 font-mono">
            <h1 className="font-mono text-center text-3xl font-bold mb-3 py-2">💀 Guess my death ? 💀</h1>
            <form className="flex flex-col justify-center items-center w-full md:w-max">
                <input ref={nameRef} className="mb-3 rounded-lg border-2 h-10 px-4 py-4 md:py-0 w-full" type="text" placeholder="Nom"
                       onChange={(e) => setName(e.target.value)}/>
                <input ref={jourRef} className="mb-3 rounded-lg border-2 h-10 w-full px-4 py-4 md:py-0 w-full" type="text"
                       placeholder="Jour de naissance"
                       onChange={(e) => setJour(parseInt(e.target.value))}/>
                <input ref={moisRef} className="mb-3 rounded-lg border-2 h-10 w-full px-4 py-4 md:py-0 w-full" type="text"
                       placeholder="Mois de naissance"
                       onChange={(e) => setMois(parseInt(e.target.value))}/>
                <input ref={anneeRef} className="mb-3 rounded-lg border-2 h-10 w-full px-4 py-4 md:py-0 w-full" type="text"
                       placeholder="Année de naissance"
                       onChange={(e) => setAnnee(parseInt(e.target.value))}/>
            </form>
            <div>
                <button
                    className="w-36 mx-2 h-10 py-2 px-3 bg-green-700 text-white font-bold mx-auto rounded-xl mb-3 mt-5 cursor-pointer"
                    onClick={showResults}>
                    Résultats !
                </button>
                <button
                    className="w-36 mx-2 h-10 py-2 px-3 bg-amber-300 text-gray-800 font-bold mx-auto rounded-xl mb-3 mt-5 cursor-pointer"
                    onClick={reset}>
                    Reset
                </button>
            </div>
            {results}
            <button
                className="h-10 py-2 px-3 bg-blue-600 text-white font-bold mx-auto rounded-xl mb-3 mt-5 cursor-pointer"
                onClick={() => setFamVisible(!famVisible)}>
                Show/Unshow Family
            </button>
            {famVisible ? family : ""}


        </div>
    );
};

export default Life;