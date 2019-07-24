import React, { Component } from 'react';
import _ from 'lodash';

import PostList from '../PostList';
import SortButton from '../SortButton';
import Loader from '../Loader';

import './styles.css';

export default class Posts extends Component {
  state = {
    filteredData: null,
    sortedName: '',
    direction: null,
  };

  componentDidMount() {
    // Запрашиваем данные
    fetch('https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow')
      .then(response => response.json())
    // Фильтруем полученные данные и добавляем в стейт
      .then(data => this.setState({ filteredData: this.filteredItems(data.items) }))
      .catch((e) => {
        console.log(e);
      });
  }

  // Фильтр данных по параметрам: посты с ответом и репутацией овнера не менее 50
  filteredItems = data => _.filter(data, (item => item.is_answered && item.owner.reputation >= 50));

  // Сортировка данных по необходимому полю (по возрастанию и убыванию)
  sortBy = (fieldName) => {
    const { sortedName, filteredData, direction } = this.state;
    if (sortedName !== fieldName) {
      this.setState({
        sortedName: fieldName,
        filteredData: _.sortBy(filteredData, [fieldName]),
        direction: 'asc',
      });
    } else {
      this.setState({
        filteredData: filteredData.reverse(),
        direction: direction === 'asc' ? 'desc' : 'asc',
      });
    }
  };

  render() {
    const { filteredData, direction } = this.state;
    return (
      <section className="container">
        {filteredData === null
          ? (
            <div className="loader-block">
              <h1 className="loader-label">Loading...</h1>
              <Loader />
            </div>
          )
          : (
            <>
              <SortButton
                sortBy={this.sortBy}
                direction={direction}
              />
              <PostList items={filteredData} />
            </>
          )}
      </section>
    );
  }
}
