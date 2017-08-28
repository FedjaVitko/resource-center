import React, { Component } from 'react'
import LetterheadCard from '../components/LetterheadCard'

class Letterhead extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </p>
          </div>
        </div>
        <div className="row">
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://placeimg.com/600/776/nature"
          />
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://placeimg.com/600/776/animals"
          />
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://placeimg.com/600/776/arch"
          />
          <LetterheadCard
            title="Card title"
            action="Action 1"
            image="https://placeimg.com/600/776/tech"
          />
        </div>
      </div>
    )
  }
}

export default Letterhead
