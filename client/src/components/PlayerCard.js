import React from 'react';
import {Card, Icon} from 'semantic-ui-react'

const PlayerCard = (props) => {
    return (
    <Card>
    
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
        {`Country: ${props.country}`}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon circular name='search' />
       {`Searches: ${props.searches}` }
      
    </Card.Content>
  </Card>
    );
};



export default PlayerCard;