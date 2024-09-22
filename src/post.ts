import {AccountAddress, GetEventsResponse} from '@aptos-labs/ts-sdk';
import {aptos, config} from './common/config';
import axios from 'axios';

export type Post = {
  post_content: string;
  post_image: string[];
  user_address: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const events = await aptos.event.getModuleEventsByEventType({
    eventType: `${config.socialModule}::social::PostEvent`,
  });
  const posts: Post[] = [];
  for (const event of events) {
    const post = event.data as Post;
    posts.push(post);
  }
  return posts;
};
