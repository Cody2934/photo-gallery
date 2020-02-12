import React, { Component } from "react";
import ImageItem from "./ImageItem.js";
import images from "./data.js";

export default class Filter extends Component {
    state = { selected:null };
    render() {
      const monsterNodes = images
      .filter(monster => {
        if (!this.state.selected) return true;
            
            return monster.keyword === this.state.selected;
          })
          .map(creature => <ImageItem key={creature.title} image={creature} />);
          
    
        const handleChange = e => {
          this.setState({ selected: e.target.value });
        };

            return (
                <div>
                  <select className="monster-type-filter" onChange={handleChange}>
                      <option value="" defaultValue>All Types</option>
                      <option value="narwhal">Narwhal</option>
                      <option value="rhino">Rhino</option>
                      <option value="unicorn">Unicorn</option>
                      <option value="unilego">Unilego</option>
                      <option value="triceratops">Triceratops</option>
                      <option value="markhor">Markhor</option>
                      <option value="mouflon">Mouflon</option>
                      <option value="addax">Addax</option>
                      <option value="chameleon">Chameleon</option>
                      <option value="lizard">Lizard</option>
                      <option value="dragon">Dragon</option>
                  </select>
                  <ul>
                    {monsterNodes}
                  </ul>
                </div>

                
            );
}
}