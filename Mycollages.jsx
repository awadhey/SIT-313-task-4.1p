import Card from './card'
import './Card.css'
import tutList from './collageList'

 function cardComponent(staff,  i)
 {
    return <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    description = {staff.description}
    star = {staff.star}
    Author = {staff.Author}
/>
 }

function CardList2() {
    return (
        <div className='row'>
           { tutList.map(cardComponent)}
        </div>
    )

}

export default CardList2