import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "./Messenger";
import { Link } from "react-router-dom";

export default function Atv05() {
  return (
    <>
        <FormQuiz />
        <FormTicket />
        <Accordion />
        <Messenger />
        <Link to="/">Voltar</Link>
    </>
  );
}