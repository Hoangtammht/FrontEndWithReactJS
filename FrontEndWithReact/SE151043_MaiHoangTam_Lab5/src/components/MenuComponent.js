import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


class Menu extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }

 

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>                         
          );
      else
          return(
              <div></div>
          );
  }

  renderComment(dish) {
    if (dish != null)
        return(
                <CardBody>
                  <CardTitle className="font-weight-bold">Comment</CardTitle>
                  {dish.comments.map(comment => (
                    <div key={comment.id}>
                    <CardText>{comment.comment}</CardText>
                    <CardText>-- {comment.author}, {comment.date}</CardText>
                    </div>
                  ))}
                </CardBody>
        );
    else
        return(
            <div></div>
        );
}

  render() {
      const menu = this.props.dishes.map((dish) => {
          const {id, name , image} = dish;
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={id}
                onClick={() => (this.onDishSelect(dish))}>
                <CardImg width="100%" src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">               
                  <div className="col-12 col-md-5 m-1 ">{this.renderDish(this.state.selectedDish)}</div>
                  <div className="col-12 col-md-5 m-1 ">{this.renderComment(this.state.selectedDish)}</div>                  
                </div>
              
          </div>
      );
  }
}

export default Menu;