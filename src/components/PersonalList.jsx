import { useEffect, useState } from "react";
import PersonalListService from "../services/PersonalListService";

export const PersonalList = () => {

    const [personal, setPersonal] = useState([{}]);

    const fetchPersonal = async () => {
        try {
            const res = await PersonalListService.getPersonal();
            console.log(res.data.results)
            setPersonal(res.data.results);
        } catch {

        }
    };

    useEffect(() => {
        fetchPersonal();
    }, []);

  return (
    <>
        {
            personal.map(person => (
                <p key={person.name}>{person.name}</p>
            ))
        }
        <button>siguiente</button>
    </>
  )
}
