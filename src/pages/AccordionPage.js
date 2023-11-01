import Accordion from "../components/Accordion";

function AccordionPage(){
    const items = [
        {
            id: 'lk123',
            label:'Can I use React on a project?',
            content: 'Of course you dummy'
        },
        {
            id: '214s',
            label:'Can I use Javascript on a project',
            content: 'Of course you dummy'
        },
        {
            id: 'jksa1',
            label:'Can I use CSS on a project?',
            content: 'Of course you dummy'
        }
    ]

    return <Accordion items={items}/>;

}

export default AccordionPage;