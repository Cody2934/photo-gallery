import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (




    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
            <select class="cat-type-filter">
                <option value="" selected>All Types</option>
                <option value="Angora">Angora</option>
                <option value="Tuxedo">Tuxedo</option>
                <option value="Orange Tabby">Orange Tabby</option>
                <option value="Manx">Manx</option>
            </select>
        `;
    }
}

export default FilterCats;