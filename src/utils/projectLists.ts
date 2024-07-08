import flashcard from "../assets/projects/flashcard/flashcard.png"
import flashcard2 from "../assets/projects/flashcard/flashcard2.png"
import flashcard3 from "../assets/projects/flashcard/flashcard3.png"
import flashcard4 from "../assets/projects/flashcard/flashcard4.png"
import speedgame from "../assets/projects/speedgame/speedgame.png";
import speedgame2 from "../assets/projects/speedgame/speedgame2.png";
import speedgame3 from "../assets/projects/speedgame/speedgame3.png";
import speedgame4 from "../assets/projects/speedgame/speedgame4.png";
import tasteIt from "../assets/projects/tasteit/tasteit.png";
import tasteIt2 from "../assets/projects/tasteit/tasteit2.png";
import tasteIt3 from "../assets/projects/tasteit/tasteit3.png";
import countries from "../assets/projects/countries/countries.png";
import countries2 from "../assets/projects/countries/countries2.png";
import countries3 from "../assets/projects/countries/countries3.png";
import { ObjectType } from "../pages/types/portfolioTypes";

interface ProjectDetailsProps {
    [key: string]: ObjectType<string | string[]>
}

export const projectsDetails: ProjectDetailsProps = {
    790588458: {
        name: 'CardIO App',
        image: [flashcard, flashcard2, flashcard3, flashcard4],
        type: ['All', 'Ongoing', 'ReactJs', 'TypeScript', 'NodeJs']
    },
    475020012: {
        name: 'Countries App',
        image: [countries, countries2, countries3],
        type: ['All', 'ReactJs']
    },
    480781125: {
        name: 'SpeedGame App',
        image: [speedgame, speedgame2, speedgame3, speedgame4],
        type: ['All', 'ReactJs']
    },
    490180993: {
        name: 'Recipe App',
        image: [tasteIt, tasteIt2, tasteIt3],
        type: ['All', 'ReactJs']
    }
}