
import "./fullwidthcard.css";
import { motion } from "framer-motion";

function FullWidthCard() {
  return (
    <div className="example-container">
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }} className="imported" >
        <h1 className="cardhead">CONTENT HEADING HERE</h1>
        <h6 className="context">With the advent of better cell phone cameras and the increasing popularity of internet-enabled mobile apps, the need has also increased to extend the status function, which has been around for a long time in social networks, to the multimedia area and thereby remove functions of the feed.[3]

In October 2013, Snapchat first introduced the story function. This is a series of snaps that together tell a narrative through a chronological order. A story is deleted after 24 hours. Snapchat became very well known and popular with teenagers because of this feature, among other things. Later other apps would copied this feature.[4][5] In October 2015, Twitter introduced the story feature called Moments. In 2016, Google introduced the Google AMP Stories service, which enables mobile websites to load faster and be presented in the format of a stories.[3]

In August 2016, Instagram introduced a stories function that deletes the content after 24 hours.[6] The media has often accused the site of copying Snapchat.[7]

In February 2017, the instant messenger WhatsApp introduced the Now Status stories function in beta, which was later renamed Status.[8] In March 2017, a story function was introduced in Facebook for Facebook Messenger.[9] In August 2018, YouTube introduced a stories function that initially was limited to pictures, but now also supports short video clips.[10][11]

In August 2018, the GIF website Giphy introduced a story function.[12] Also, Netflix has been experimenting in June 2019 in the mobile app version a stories featuring film trailer and teaser</h6>
      </motion.div>
    </div>
  );
}

export default FullWidthCard;
