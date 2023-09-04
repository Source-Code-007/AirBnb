import { useQuery } from "react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cards from "../HelpingCompo/Cards/Cards";
import { useState } from "react";
import MyLoading from "../HelpingCompo/MyLoading";
import { BsFilterLeft } from "react-icons/bs";
import MyModal from "../HelpingCompo/MyModal/MyModal";



const Homepage = () => {
    const [activeCategory, setActiveCategory] = useState('Historical homes')

    const { isLoading: categoryLoading, data: categories } = useQuery('categories', async () => {

        const res = await fetch('https://airbnb-server-pi.vercel.app/get-category')
        const result = res.json()
        return result
    }
    )

    const { isLoading: allDataLoading, data: allData, refetch: allDataRefetch } = useQuery('allData', async () => {

        const res = await fetch('https://airbnb-server-pi.vercel.app/allData')
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
                <TabList className="flex gap-2 justify-between items-center flex-wrap mb-8">
                    <div className="flex flex-wrap gap-2 justify-center flex-1">
                        {
                            categories?.map((category, ind) => {
                                return <Tab key={ind} className={`px-4 py-2 ${activeCategory === category ? 'bg-[#a754f6]' : 'bg-slate-700'} font-bold text-slate-50 text-xl cursor-pointer rounded`} onClick={() => setActiveCategory(category)}>{category}</Tab>
                            })
                        }
                    </div>
                    <button className="flex items-center gap-2 glass px-4 py-2 rounded font-bold text-lg text-slate-800 !border-2 !border-slate-700" onClick={() => window.my_modal_1.showModal()}> <BsFilterLeft></BsFilterLeft> Filter</button>
                </TabList>



                {
                    categories.map((cat, ind) => {
                        return <TabPanel key={ind} className={'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 xl:gap-8'}>
                            {
                                allData.filter(data => data.category === activeCategory).map((data, ind) => {
                                    return <Cards key={ind} myData={data}></Cards>

                                })
                            }
                        </TabPanel>

                    })
                }


            </Tabs>

            <MyModal></MyModal>
        </div>
    );
};

export default Homepage;