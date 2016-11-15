import React, { Component } from 'react'
import { Icon, Extra, Container, Header, Grid, Content, Button,  Input, Menu, Segment, Card, Group, Item, Image, Description} from 'semantic-ui-react'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'class',
    }
  }

  renderStudents() {
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Button fluid basic >Edit</Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Meta content='Musicians' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
          <Card.Content extra>
              <Button fluid basic >Edit</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }

  renderClasses () {
    return (
      <Item.Group divided>
        <Item>
           <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />
           <Item.Content>
             <Header as='a'>My Neighbor Totoro</Header>
             <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, neque quis dictum porttitor, dui augue ultrices tellus, quis lobortis massa arcu nec dolor. Nulla eu urna et nisi accumsan convallis.</Item.Description>

           </Item.Content>
         </Item>
         <Item>
            <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Item.Content>
              <Header as='a'>My Neighbor Totoro</Header>
              <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, neque quis dictum porttitor, dui augue ultrices tellus, quis lobortis massa arcu nec dolor. Nulla eu urna et nisi accumsan convallis.</Item.Description>

            </Item.Content>
          </Item>
      </Item.Group>
    )
  }
  render () {
    const { activeItem } = this.state
    return (
      <Container>
        <Menu attached='top' tabular>
          <Menu.Item name='classes' active={activeItem === 'class'} onClick={() => this.setState({ activeItem: 'class' })} />
          <Menu.Item name='students' active={activeItem === 'student'} onClick={() => this.setState({ activeItem: 'student' })} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: 'true' }} placeholder='Search users...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          {activeItem === 'class' ? this.renderClasses() : this.renderStudents()}
        </Segment>
      </Container>
    )
  }
}
