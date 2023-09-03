import { useQuery } from "react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cards from "../HelpingCompo/Cards/Cards";
import { useState } from "react";
import MyLoading from "../HelpingCompo/MyLoading";




const Homepage = () => {
    const [activeCategory, setActiveCategory] = useState('Historical homes')

    const { isLoading: categoryLoading, data: categories } = useQuery('categories', async () => {

        const res = await fetch('http://localhost:3000/get-category')
        const result = res.json()
        return result
    }
    )

    const { isLoading: allDataLoading, data: allData, refetch: allDataRefetch } = useQuery('allData', async () => {

        const res = await fetch('http://localhost:3000/allData')
        const result = res.json()
        return result
    }
    )


    if (categoryLoading || allDataLoading) {
        return <div className="h-[96vh] flex items-center justify-center">
            <MyLoading></MyLoading>
        </div>
    }


    return (
        <div className="py-12 myContainer">
            <Tabs>
                <TabList className="flex gap-2 justify-center items-center flex-wrap mb-8">
                    {
                        categories?.map((category, ind) => {
                            return <Tab key={ind} className={`px-4 py-2 ${activeCategory === category ? 'bg-green-500' : 'bg-slate-700'} font-bold text-slate-50 text-xl cursor-pointer rounded`} onClick={() => setActiveCategory(category)}>{category}</Tab>
                        })
                    }
                </TabList>


                {
                    allData.map((data, ind) => {
                        return <TabPanel key={ind}>
                            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
                                {
                                     data?.data.map((myData, ind)=> <Cards key={ind} myData={myData}></Cards>)
                                }
                            </div>
                        </TabPanel>
                    })
                }

            </Tabs>
        </div>
    );
};

export default Homepage;