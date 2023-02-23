import React from 'react'
import "../components/styles/SpecialsCard.css"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {   
            image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/06/vegan-new-potato-salad-1000x1500.jpg",
            title: "Supreme Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
            order: "Order a delivery"
        },
        {
            image: "https://www.peanutblossom.com/wp-content/uploads/2020/05/garlicbread-feature-1-720x720.jpg",
            title: "Garlic Bread",
            price: "$5.99",
            description: "Our Garlic Bread goes with every meal there is and is super tasty. It is affordable and something you would get addicted to.",
            order: "Order a delivery"
        },
        {
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d5c03a99139723.5eebce6281e84.jpeg",
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            order: "Order a delivery"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
