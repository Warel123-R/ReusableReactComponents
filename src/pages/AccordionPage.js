import Accordion from "../components/Accordion";
function AccordionPage(){
    const items = [
        {
            id: '329380243',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want'
        },
        {
            id: '22o3420f',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript on any project you want. You can use React on any project you want. You can use React on any project you want'
        },
        {
            id: '2o3u4iosjfdl',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want. You can use React on any project you want. You can use React on any project you want'
        },
    ];
    return(
        <Accordion items={items}></Accordion>
    );
}
export default AccordionPage;