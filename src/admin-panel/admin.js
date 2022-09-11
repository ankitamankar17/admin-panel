import React, { useState } from "react";
import styles from './admin.module.css';
import searchImage from './image/search_icon.svg';
import gif from './image/preloader.gif';
import SearchBar from "./search";

const Admin =()=>{
    const[selectedUser,setUser]=useState(null)
   
    const[data,setData]=useState('')
    const[search,setSearch]=useState('Tabeldata')

    const OnSelectedItem=(item)=>{
        setUser(item);
    };
    
    const onSearchChange = (searchValue) => {
        setSearch(searchValue);
    
        if (searchValue === "") {
          setData(TabelData);
        } else {
          const newArray = TabelData.filter((i) =>
            i.firstName.toLowerCase().includes(searchValue.toLowerCase())
          );
          setData(newArray);
        }

     
       
    };


    return(
<main>
        <div id={styles.overlay}>
        <img src={gif} alt="Preloader icon" />
    </div>

       <div id={styles.table_section}> 

            <form  readOnly >
                <img src={searchImage} alt="Search Icon" />
                <SearchBar  placeholder="Enter something..." onSearchChange={onSearchChange}   search={search}  />
            </form>

            <div id={styles.table_wrapper}>

                <div id={styles.table_headers}>
                    <table>
                        <thead>
                            <tr>
                                <th className={ styles.column1}>Id</th>
                                <th className={ styles.column2}>FirstName</th>
                                <th className={styles.column3}>LastName</th>
                                <th className={styles.column4}>Email</th>
                                <th className={styles.column5}>Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id={styles.table_data}>
                    <table>
                        <tbody>
                        { TabelData.map((function (item, key) {
                  return (
                    <tr  key={key} onClick={()=>OnSelectedItem(item)}
                    className={`${styles.data_row}
                            ${
                                selectedUser !=null &&
                                selectedUser.firstName===item.firstName &&
                                styles.SelectedRow
                            }`}>
                      <td className={styles.column1}>{item.id}</td>
                      <td className={styles.column2}>{item.firstName}</td>
                      <td className={styles.column3}>{item.lastName}</td>
                      <td className={styles.column4}>{item.email}</td>
                      <td className={styles.column5}>{item.phone}</td>
                      
                    </tr>
                  )
                }))}
                       
                        </tbody>
                    </table>
                </div>

            </div>

        </div>


       
{ selectedUser !=null && (
        <div id={styles.info_wrapper}>
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            <div id={styles.info_content}>
                <div><b>User selected:</b>{selectedUser.firstName} {selectedUser.lastName}</div>
                <div>
                    <b>Description: </b>
                   <div className={styles.description}>
                       {selectedUser.description}
                   </div>
                </div>
                <div><b>Address:</b>{selectedUser.address.streetAddress}</div>
                <div><b>City:</b>{selectedUser.address.city}</div>
                <div><b>State:</b> {selectedUser.address.state}</div>
                <div><b>Zip:</b> {selectedUser.address.zip}</div>
            </div>
        </div>
)}

</main>


    )
}

const TabelData=
[{"id":881,"firstName":"Edward","lastName":"Knight","email":"YVanatta@etiam.io","phone":"(763)244-4664","address":{"streetAddress":"9430 Ac Ave","city":"Elmwood Park","state":"IL","zip":"53816"},"description":"tortor convallis elementum nullam sed vestibulum aliquam lacus malesuada tellus consequat aliquam odio vitae porta convallis vestibulum dui ac rutrum ipsum sollicitudin id ante vestibulum consectetur ipsum nullam ipsum suspendisse sed in"},
{"id":719,"firstName":"Nadine","lastName":"Settle","email":"CChatham@ipsum.gov","phone":"(212)372-2855","address":{"streetAddress":"1399 Sit Ln","city":"Milwaukee","state":"IL","zip":"36431"},"description":"nec pharetra amet sed lacus morbi placerat pretium molestie odio magna scelerisque massa ipsum facilisis sed in sed lectus egestas facilisis sed tempor sed augue at sit etiam odio turpis lectus sit"},
{"id":107,"firstName":"Olena","lastName":"Royer","email":"JStevenson@molestie.net","phone":"(764)231-8345","address":{"streetAddress":"3201 Orci St","city":"Vancouver","state":"NY","zip":"46430"},"description":"elementum mattis aliquam at risus egestas amet vitae elementum risus sapien sollicitudin nunc ac velit hendrerit hendrerit sapien sed mattis magna consectetur tellus lorem amet at ante nullam sit magna ipsum fringilla"},
{"id":620,"firstName":"Zandra","lastName":"Symes","email":"VLund@sagittis.io","phone":"(741)632-3707","address":{"streetAddress":"3778 Rutrum Ave","city":"Oxford","state":"IN","zip":"72209"},"description":"lacus sit pulvinar neque fringilla elementum nullam orci nec molestie tortor tortor mattis sit eget at scelerisque sed tempor nullam hendrerit massa fringilla neque neque risus facilisis orci tortor suspendisse facilisis sollicitudin"},
{"id":344,"firstName":"Deena","lastName":"Arrington","email":"JMeyers@fringilla.io","phone":"(354)837-6684","address":{"streetAddress":"2676 Lacus Dr","city":"Whitehouse","state":"FL","zip":"81765"},"description":"et nec tellus amet massa sagittis ac tincidunt libero non sed elementum malesuada augue eget eros at aliquam ipsum massa nec hendrerit tortor tempor porttitor convallis lectus dolor aliquam tortor porta morbi"},
{"id":383,"firstName":"Judith","lastName":"Scott","email":"BBlack@magna.net","phone":"(687)092-8739","address":{"streetAddress":"3589 Amet Ln","city":"Wheeling","state":"IL","zip":"15786"},"description":"massa facilisis ipsum lorem sed vestibulum sed tempor amet id lorem tortor sit in tincidunt odio sit dolor amet porttitor velit sed lectus molestie pretium sit non sed ac sit ac mattis"},
{"id":672,"firstName":"Rania","lastName":"Demerath","email":"TKuhl@velit.ly","phone":"(622)192-5441","address":{"streetAddress":"1293 Dolor Rd","city":"Patterson","state":"VT","zip":"92270"},"description":"sollicitudin eget ipsum sed ante pharetra sit amet aenean risus vel ipsum ac mi nullam sed etiam aliquam adipiscing vestibulum ipsum vestibulum consequat suspendisse sed sit nec vestibulum dolor nunc morbi lacus"},
{"id":641,"firstName":"Matina","lastName":"Kelly","email":"NSnyder@hendrerit.net","phone":"(898)150-6820","address":{"streetAddress":"6356 Sagittis Dr","city":"Tonasket","state":"NV","zip":"35581"},"description":"placerat adipiscing morbi consectetur at quis suspendisse aenean aliquam vestibulum vel mattis nec vestibulum dolor vestibulum lacus orci magna ac tellus augue eget magna massa nunc risus porta aenean tincidunt pulvinar lectus"},
{"id":588,"firstName":"Venus","lastName":"Kilpatrick","email":"CDepreta@id.org","phone":"(354)464-5338","address":{"streetAddress":"2504 Molestie Ct","city":"San Antonio","state":"AK","zip":"42587"},"description":"velit tincidunt eget libero sit sit consectetur tellus vestibulum amet magna vel risus curabitur neque egestas consectetur dolor pretium pretium facilisis lacus ante sed eget egestas sapien orci tellus mi ipsum convallis"},
{"id":90,"firstName":"Teresa","lastName":"Altar","email":"DMarcks@lacus.com","phone":"(215)596-9647","address":{"streetAddress":"3697 Eget Ln","city":"Winfield","state":"WV","zip":"66271"},"description":"sed nullam in tortor malesuada lacus sed egestas augue nullam amet egestas mattis odio sit dolor sed lectus aliquam mattis sed neque lacus et velit elementum consectetur rutrum lorem nunc etiam facilisis"},
{"id":443,"firstName":"Guadelupe","lastName":"Kohn","email":"DVanderlinden@lectus.io","phone":"(648)047-7902","address":{"streetAddress":"776 Nunc Ln","city":"Edison","state":"AL","zip":"10572"},"description":"dolor id fringilla consectetur aliquam eros libero amet sed at risus turpis hendrerit etiam sagittis eget eget mi lacus eros nullam dolor lorem consequat convallis amet tortor id odio curabitur vel id"},
{"id":227,"firstName":"Lakshmi","lastName":"User","email":"AJessica@facilisis.gov","phone":"(205)845-2748","address":{"streetAddress":"3422 Vitae Dr","city":"Vacaville","state":"VA","zip":"44228"},"description":"eget dui neque convallis amet pulvinar et id sed et et dolor pulvinar tincidunt vel mattis eget pulvinar consequat sed nec massa lacus consequat sed scelerisque ac magna amet lacus consequat morbi"},
{"id":61,"firstName":"Tracey","lastName":"Sober","email":"LMalmfeldt@lectus.org","phone":"(151)227-5051","address":{"streetAddress":"948 Vitae Dr","city":"Cranford","state":"TX","zip":"65218"},"description":"elementum magna eros fringilla aliquam eget aenean et aliquam mattis elementum orci sed ac malesuada nec orci sit libero magna elementum eros pharetra magna elementum mi lacus donec sit massa pulvinar ac"},
{"id":709,"firstName":"Dawn","lastName":"Elkins","email":"JHumphrey@non.ly","phone":"(229)555-9394","address":{"streetAddress":"4138 Augue Rd","city":"Roy","state":"MT","zip":"96825"},"description":"lorem molestie aliquam dui sagittis morbi aenean at suspendisse mattis vestibulum magna facilisis sit nunc mattis facilisis vitae scelerisque neque sit facilisis vestibulum amet lorem sed ac ac risus nec sit neque"},
{"id":770,"firstName":"Erica","lastName":"Seguin","email":"KClare@sed.com","phone":"(676)237-2811","address":{"streetAddress":"8124 Malesuada Dr","city":"Pacoima","state":"HI","zip":"44639"},"description":"placerat dolor ipsum massa placerat amet morbi dolor porta risus sollicitudin id dui eros egestas tortor nec sed ac placerat sed hendrerit elementum adipiscing pharetra id pulvinar dolor sollicitudin vitae et amet"},
{"id":506,"firstName":"Julius","lastName":"Warren","email":"BGarner@tempor.org","phone":"(645)621-1460","address":{"streetAddress":"9988 Massa St","city":"Schaumburg","state":"HI","zip":"34139"},"description":"sagittis neque ipsum lorem nec at lacus non massa sapien consectetur risus ac tincidunt tellus lacus at at lectus aenean consectetur sit sit id eros tincidunt sed magna neque morbi nunc aliquam"},
{"id":90,"firstName":"Shelly","lastName":"Ziniel","email":"ACowen@lacus.net","phone":"(170)564-1301","address":{"streetAddress":"6341 Dolor St","city":"Sterling","state":"MI","zip":"37628"},"description":"nec neque pulvinar dolor quis amet dolor ipsum dolor nunc sapien porta donec tortor lorem mattis quis morbi tortor tortor augue dolor amet aenean turpis lectus porta orci tortor quis aliquam vel"},
{"id":904,"firstName":"Percy","lastName":"Breeland","email":"CCrete@quis.gov","phone":"(959)057-5324","address":{"streetAddress":"4036 Hendrerit Dr","city":"Paw Paw","state":"AR","zip":"70639"},"description":"sed consequat placerat orci adipiscing odio tincidunt vitae massa aliquam vitae pulvinar mattis aenean tortor eros dolor id magna sed amet pretium dolor dolor consequat neque facilisis amet velit malesuada in tincidunt"},
{"id":825,"firstName":"Alexis","lastName":"Douglas","email":"TGeddes@mattis.com","phone":"(225)712-6562","address":{"streetAddress":"8594 Tellus St","city":"Old Bridge","state":"GA","zip":"66268"},"description":"vestibulum porta fringilla eget ipsum sed lacus sed pulvinar at consequat dolor lacus nec magna sed sed id nec magna sapien augue magna in risus consectetur consequat ac vitae eros sit sed"},
{"id":630,"firstName":"Natalia","lastName":"Whatley","email":"MHickey@malesuada.ly","phone":"(852)688-0663","address":{"streetAddress":"511 Dolor Ct","city":"Panama City Beach","state":"IN","zip":"42520"},"description":"tempor consectetur vestibulum orci pulvinar eget malesuada magna vitae hendrerit magna odio dui sollicitudin et etiam ipsum mattis amet molestie aenean ipsum et odio nunc rutrum tincidunt nullam egestas vel etiam tortor"},{"id":26,"firstName":"Sheng","lastName":"Mcclamroch","email":"EKemmerling@morbi.com","phone":"(379)195-4196","address":{"streetAddress":"8278 Magna Ct","city":"Franklin","state":"PA","zip":"92567"},"description":"scelerisque aliquam augue lacus turpis porttitor sed elit adipiscing curabitur eget donec pulvinar eros lacus donec sed sollicitudin porttitor risus dui nullam massa mi in mi pretium vestibulum orci facilisis morbi et"},
{"id":166,"firstName":"Farzana","lastName":"Wittek","email":"KJohns@magna.com","phone":"(293)960-1785","address":{"streetAddress":"9086 Tellus Ave","city":"Anonymous","state":"IN","zip":"18803"},"description":"ante et malesuada aliquam sit porta ipsum vel sed libero ac elementum orci sit ipsum malesuada et nullam augue placerat mattis fringilla pulvinar dolor nullam eget sed hendrerit rutrum velit fringilla quis"},{"id":856,"firstName":"Ora","lastName":"Brinkley","email":"DStroll@placerat.net","phone":"(321)647-3213","address":{"streetAddress":"123 Dolor Dr","city":"Seattle","state":"OK","zip":"97240"},"description":"libero non elementum mattis vitae porttitor nunc amet malesuada odio sit tellus sit sed dolor orci lectus massa magna libero hendrerit etiam convallis non massa curabitur mattis at odio aliquam amet libero"},
{"id":250,"firstName":"Azra","lastName":"Sadler","email":"FBarron@tortor.org","phone":"(944)183-7211","address":{"streetAddress":"9785 Pulvinar Ct","city":"Littleton","state":"CO","zip":"63111"},"description":"augue pulvinar vitae sed dolor vitae pulvinar pretium lacus augue consectetur molestie mattis non placerat nunc aliquam massa pharetra sollicitudin massa ac sagittis non tellus sapien sit tellus facilisis rutrum nullam ipsum"},
{"id":985,"firstName":"Marie","lastName":"Moffett","email":"EGrunert@lectus.ly","phone":"(511)750-4300","address":{"streetAddress":"4235 At Dr","city":"Leawood","state":"UT","zip":"52408"},"description":"elit porttitor tortor adipiscing sed massa ipsum sit vitae sollicitudin neque sapien tortor adipiscing libero vestibulum aenean ac etiam scelerisque placerat tortor vitae tincidunt id ac ac sit vel fringilla pulvinar sed"},
{"id":833,"firstName":"Adeola","lastName":"Laiuppa","email":"APuckett@orci.com","phone":"(661)836-2727","address":{"streetAddress":"7278 Quis Ct","city":"Aurora","state":"ME","zip":"85367"},"description":"orci dui neque nec curabitur at sed amet risus molestie vitae odio tellus sit lacus orci massa convallis sollicitudin at tortor sit magna quis nunc massa ipsum nunc pulvinar hendrerit lacus suspendisse"},
{"id":875,"firstName":"Lane","lastName":"Schatz","email":"VBishop@neque.ly","phone":"(887)486-7880","address":{"streetAddress":"5949 Ac Dr","city":"Prince George","state":"OR","zip":"69611"},"description":"sed sed rutrum augue egestas vitae lorem convallis elementum magna tortor lectus amet eget tincidunt vitae rutrum placerat eget nec pulvinar porta magna egestas dui sit facilisis lacus nunc orci orci vestibulum"},
{"id":611,"firstName":"Saima","lastName":"Ponthieux","email":"MBurrs@pulvinar.com","phone":"(834)595-2948","address":{"streetAddress":"6009 Non Ct","city":"Piedmont","state":"WV","zip":"91999"},"description":"odio ante massa malesuada pulvinar aliquam pulvinar et adipiscing dui malesuada ac sit sed aliquam consequat eros fringilla lacus massa massa etiam etiam molestie amet magna quis elementum et ante tempor dolor"},
{"id":988,"firstName":"Grace","lastName":"Nabors","email":"YBowman@sollicitudin.net","phone":"(166)553-7034","address":{"streetAddress":"755 Sapien Ln","city":"Indy","state":"VT","zip":"69957"},"description":"donec mattis dolor consectetur sit massa tincidunt sit adipiscing lacus donec mattis etiam non sollicitudin pharetra vel sit convallis at nullam dolor magna placerat nec malesuada sit vitae sed ac et risus"},
{"id":687,"firstName":"Benika","lastName":"Dentice","email":"BElkins@tincidunt.org","phone":"(217)160-5869","address":{"streetAddress":"8017 Rutrum Ave","city":"Algonquin","state":"NM","zip":"24034"},"description":"et vestibulum pretium mattis elit sed ipsum elementum placerat lectus nec orci tellus tempor libero molestie sit malesuada neque in facilisis non orci nec nullam placerat et ac magna massa vitae sed"},
{"id":625,"firstName":"Spyro","lastName":"Shafer","email":"VScribner@quis.com","phone":"(782)619-1209","address":{"streetAddress":"7634 Aenean St","city":"El Dorado Hills","state":"KY","zip":"81624"},"description":"lacus dui magna aliquam lacus mattis sagittis amet vestibulum sollicitudin etiam aenean odio hendrerit elit eget tortor sollicitudin pulvinar lacus nunc porta aliquam mattis dolor augue sollicitudin curabitur placerat et consequat ac"},
{"id":852,"firstName":"Dainius","lastName":"Ferreira","email":"KIngle@risus.gov","phone":"(937)510-2674","address":{"streetAddress":"9255 Sit Ct","city":"Corwith","state":"PA","zip":"10630"},"description":"eget sit sit ipsum dui velit ipsum tortor lorem amet sagittis velit non convallis neque amet mattis porttitor sit sapien mattis sollicitudin amet amet dolor sed consequat et et pulvinar libero aliquam"}]
   
   


export default Admin;