import { createContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getAllJob } from "../api/Post";

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [job,setJob] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
          try {
            const response = await getAllJob();
            setJob(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching jobs:', error);
            setLoading(false);
          }
        };
    
        fetchJobs();
      }, []);

      if(loading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )

    }

    
    return(
        <PostContext.Provider value={[job,setJob]}>
            {children}
        </PostContext.Provider>
    );

};

export {PostContext,PostProvider};