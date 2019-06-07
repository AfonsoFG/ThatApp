import React, { Component, Fragment } from 'react'
import { Post, AppSectionHeader, AppSectionFooter, AppSectionSidebar } from './../components'
import { Context } from '../context';
import ReactPaginate from 'react-paginate';

import api from '../configs/api'


class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    fetchPosts = () => {
        fetch(api.url + api.endpoints.posts)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            this.setState({
                posts: json
            });
            console.log(json)
        });
    }

    componentDidMount() {

        this.fetchPosts();

        this.context.subscribePosts((posts) => {
            this.setState({posts});
        });  

    }
  
    printPosts = () => {
        let listaPosts = this.state.posts;
        console.log(listaPosts);
        let posts = [];
        if (listaPosts.length > 0) {
            listaPosts.map((post) => {
                return posts.push(
                    <Post dataPosts={ post } key={ post.id } mainPage="1" />
                );
            });
        }
        return posts;
    }

    render() {
        return (
        <Fragment>
            <AppSectionHeader/>
            <div className="container pageBody pageBlog">
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Blog</h3>
                    </div>
                    <div className='col-md-9 main'>
                        { this.printPosts() }
                        <ReactPaginate
                            pageCount={10}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            containerClassName={"pagination"}
                            previousLabel={"Anterior"}
                            nextLabel={"Próximo"}
                        />
                    </div>
                    <div className='col-md-3 sidebar'>
                        <AppSectionSidebar/>
                    </div>
                </div>
            </div>
            <AppSectionFooter/>
        </Fragment>
        )
    }
}

Blog.contextType = Context;

export default Blog