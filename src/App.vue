<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"/>
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script> 
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from'./components/VideoDetail';

const API_KEY = 'AIzaSyDr_bc038Crlh5VEppu_Ro-1UFpVdHuI6k';
//const API_KEY = 'AIzaSyCjCkq-LBwKABe0ZpXumJjde2Nq3kyWt8U';


export default { // IS GOING TO CONTAIN A COUPLE OF DIFF PROPERTIES THAT CUSTOMIZE THE VUE COMPONENT AND HOW IT BEHAVES
    name: 'App',
    components: {
        SearchBar,
        VideoList,     
        VideoDetail      
    },
    data() {
        return { videos: [], selectedVideo: null };
    },
    methods: {
        onVideoSelect(video) {
            this.selectedVideo = video; 
        },
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search',{
                params: { 
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
            });
        }
    }
};
</script>