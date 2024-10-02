/** @jsx createVNode */
import{ createVNode } from "../lib";
import { globalStore } from '../stores/globalStore';
import { Header } from '../components';
import { Navigation } from '../components';
import { Footer } from '../components';
import { Post } from '../components';
import { PostForm } from '../components';

export const HomePage = () => {
    const { loggedIn, posts } = globalStore.getState();
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
            <div className="max-w-md w-full">
                <Header />
                <Navigation loggedIn={loggedIn} />
                {loggedIn ? <PostForm />:""}
                <main className="p-4">
                <div id="posts-container" className="space-y-4">

                 
                        {posts.map(({author, time, content, id}) => {
                          return   <Post author={author} time={time} content={content} id={id} />
                        })}
                    </div>
                </main>
                
                <Footer />
            </div>
         </div>
    );
  }
