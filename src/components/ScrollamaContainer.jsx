/* eslint-disable react/no-unescaped-entities */
import { Scrollama, Step } from "react-scrollama";
import styles from "./ScrollamaContainer.module.css";
import Draggable from "./Draggable";
import VideoScrubber from "./VideoScrubber";
import Textbox from "./Textbox";
import AnimatedHeading from "./AnimatedHeading";
import ImageContainer from "./ImageContainer";
import TreeDiagram from "./TreeDiagram";
// import data from "../data/impact-data.json";

function ScrollamaContainer({
  activeIndex,
  setActiveIndex,
  sections,
  openingAnimationRef,
  structureRef,
  factorsRef,
  isMobile, 
}) {
  const onStepEnter = ({ data }) => {
    setActiveIndex(data);
  };

  return (
    <>
      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug={false}>
        {/* Opening Animation */}
        <Step data={0}>
          <div
            id={sections[0].id}
            className={styles.section}
            style={{ height: "1000vh" }}
          >
            <VideoScrubber
              videoRef={openingAnimationRef}
              contentContainerHeight={"1000vh"}
              id={"opening"}
            >
              {
                <>
                  <div className={`${styles.title} ${styles.textShadow}`}>
                    <hr />

                    <span className={styles.headline}>
                      The Doomsday Glacier:
                      <br />
                      What's Happening to Antarctica's Most Critical Ice
                    </span>
                    <br />
                    <br />
                    <span className={styles.author}>
                      By Lily Peixuan Yu and Yi-Chun Lan
                    </span>
                  </div>

                  <Textbox position={"left"} yPosition={100}>
                    Imagine a frozen behemoth so massive that its fate could
                    redraw the world's coastlines.
                  </Textbox>

                  <Textbox position={"left"} yPosition={350}>
                    Antarctica—a continent of ice—holds 90% of Earth's frozen
                    water, a staggering 30 million cubic kilometers of ice.
                  </Textbox>

                  <Textbox position={"right"} yPosition={550}>
                    At the heart of this frozen realm lies the Thwaites Glacier,
                    a colossal river of ice stretching 120 kilometers wide—the
                    widest glacier in Antarctica.
                  </Textbox>

                  <Textbox position={"right"} yPosition={650}>
                    The Thwaites Glacier covers an area nearly the size of Great
                    Britain and larger than the state of Florida. Its massive
                    scale makes it a key player in Antarctica's ice sheet
                    dynamics and global sea level rise.
                  </Textbox>
                </>
              }
            </VideoScrubber>
          </div>
        </Step>

        {/* Glacier Structure */}
        <Step data={1}>
          <div
            id={sections[1].id}
            className={styles.section}
            style={{ height: "700vh" }}
          >
            <VideoScrubber
              videoRef={structureRef}
              contentContainerHeight={"700vh"}
              id={"structure"}
            >
              <>
                <Textbox position={"right"} yPosition={50}>
                  To understand the rapid changes happening with Thwaites
                  Glacier, we need to look beneath its surface.
                  <br />
                  <br />
                  This 3D model reveals the Glacier's essential parts —its ice
                  tongue extending into the ocean, its grip on the seafloor, and
                  the critical grounding line where ice meets water.
                </Textbox>

                <Textbox position={"right"} yPosition={150}>
                  As the glacier flows toward the sea, it forms a floating ice
                  tongue—an extension of the glacier that projects out over the
                  ocean waters. Like a massive frozen pier, this floating
                  platform remains connected to the main glacier but no longer
                  touches the seafloor beneath it.
                </Textbox>

                <Textbox position={"right"} yPosition={275}>
                  Beneath the ice, Thwaites Glacier maintains its grip on
                  underwater mountains and ridges on the seafloor. This grip
                  acts like an anchor, helping to stabilize the massive glacier
                  and slow its movement toward the sea.
                </Textbox>

                <Textbox position={"right"} yPosition={400}>
                  The grounding line marks the critical boundary where the
                  glacier transitions from resting on land to floating on the
                  ocean. This line acts as a threshold—behind it, the glacier
                  remains grounded on the seafloor; beyond it, the ice floats
                  freely on the water.
                </Textbox>
              </>
            </VideoScrubber>
          </div>
        </Step>

        {/*********** TIMELINE BEGINS ***********/}

        {/* 2004 */}
        <Step data={2}>
          <div
            id={sections[2].id}
            className={styles.section}
            style={{
              height: "150vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              // justifyContent: "center", // Centers content horizontally
            }}
          >
            <div
              className={styles.textContentContainer}
              style={{ top: "50vh" }}
            >
              <hr />
              <AnimatedHeading type={"h2"}>
                How Did Thwaites Glacier Begin to Fall Apart?
              </AnimatedHeading>
              <br />
              <p>
                2004 marked a critical turning point.
                <br />
                <br />
                Like a giant hand loosening its grip, the massive Thwaites
                Glacier began to detach from its underwater anchor—a seamount
                that had helped stabilize this colossal ice formation for
                thousands of years.
                <br />
                <br />
                This subtle but profound shift would prove to be the beginning
                of an accelerating transformation, as the glacier's hold on its
                ancient foundation started to weaken, setting the stage for what
                scientists would later recognize as a dramatic acceleration in
                its retreat.
              </p>
            </div>
          </div>
        </Step>

        {/* 2014 */}
        <Step data={3}>
          <div
            id={sections[3].id}
            className={styles.section}
            style={{
              height: "400vh",
              position: "relative",

              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center", // Centers content vertically
              // justifyContent: "center", // Centers content horizontally
            }}
          >
            <Textbox position={"center"} yPosition={50}>
              By 2014, the transformation became starkly visible from space.
            </Textbox>

            <Textbox position={"center"} yPosition={150}>
              Satellite imagery captured a dramatic performance of ice in
              motion—the massive ice tongue of Thwaites Glacier, a floating
              extension of the glacier stretching into the Amundsen Sea, began
              to show signs of increasing instability. Like a bridge slowly
              losing its support pillars, the ice tongue started to splinter and
              break apart.
            </Textbox>

            <Textbox position={"center"} yPosition={250}>
              This time-lapse reveals nature's raw power at work—years
              compressed into moments, showing how warming waters relentlessly
              carved away at the glacier's frozen architecture, weakening its
              structure year after year.
            </Textbox>
          </div>
        </Step>

        {/* 2019 */}
        <Step data={4}>
          <div
            id={sections[4].id}
            className={styles.section}
            style={{
              height: "150vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              // justifyContent: "center", // Centers content horizontally
            }}
          >
            <div
              style={{
                top: "50vh",
                height: "50vh",
              }}
            />
            <Draggable />
            <div className={styles.textContentContainer}>
              <AnimatedHeading type={"p"}>
                What took nature millennia to build vanished in less than two
                decades. By 2019, the massive ice tongue that once stretched
                proudly into the Amundsen Sea had virtually disappeared—a
                profound transformation you can witness by sliding between these
                two satellite images.
              </AnimatedHeading>
            </div>
          </div>
        </Step>

        {/* Melting Factors */}
        <Step data={5}>
          <div
            id={sections[5].id}
            className={styles.section}
            style={{
              height: "850vh",
            }}
          >
            <VideoScrubber
              videoRef={factorsRef}
              contentContainerHeight={"850vh"}
              id={"factors"}
            >
              {
                <>
                  <Textbox position={"right"} yPosition={50}>
                    After witnessing these dramatic transformations, a crucial
                    question emerges: What's driving these changes? Returning to
                    our 3D model, we'll examine the three driving forces at
                    work—each connected to a different part of the glacier's
                    structure.
                  </Textbox>

                  <Textbox position={"right"} yPosition={150}>
                    Warm ocean water is eating away at the Thwaites Glacier's
                    ice tongue from below. As this floating extension of the
                    glacier thins and weakens, it becomes more vulnerable to
                    fracturing. Like removing a door from its hinges, the loss
                    of the ice tongue means there's less holding back the
                    glacier's flow toward the sea.
                  </Textbox>

                  <Textbox position={"right"} yPosition={300}>
                    As the glacier's base continues to melt, it loses its vital
                    grip on the underwater mountains and ridges below. Without
                    these natural anchors, the glacier's movement toward the sea
                    accelerates.
                  </Textbox>

                  <Textbox position={"right"} yPosition={500}>
                    The grounding line—where the glacier lifts off the seafloor
                    and begins to float—is steadily retreating inland. As warm
                    water penetrates deeper beneath the glacier, it forces this
                    critical boundary to withdraw farther and farther. Each
                    retreat of the grounding line triggers a cascade effect,
                    allowing more ice to float free and accelerating the
                    glacier's march toward the sea.
                  </Textbox>
                </>
              }
            </VideoScrubber>
          </div>
        </Step>

        {/* <div style={{ height: "100vh" }}></div> */}

        <Step data={6}>
          <div
            id={sections[6].id}
            className={styles.section}
            style={{
              height: "125vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0",
            }}
          >
            <div
              // style={{
              //   width: "35vw",
              //   position: "relative",
              //   padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
              //   zIndex: "50",
              // }}
              className={styles.textContentContainer}
            >
              <hr />
              <AnimatedHeading type={"h2"}>
                Drilling into the Unknown: Unexpected Findings Beneath Thwaites
              </AnimatedHeading>
              <br />
              <p>
                A breakthrough in late 2019 brought scientists closer than ever
                to Thwaites' hidden underside. British Antarctic Survey
                scientist Peter Davis and his team drilled through 600 meters of
                ice to reach the ocean waters near the glacier's grounding line.
                Using this borehole—located just two kilometers from where the
                glacier lifts off the seafloor—they gathered critical data about
                the glacier's interaction with ocean waters.
                <br />
                <br />
                The findings were surprising. Over nine months, while the waters
                grew warmer and saltier, the ice was melting at a rate of 2-5
                meters per year—slower than scientists had predicted in their
                models. This discovery revealed just how complex the dynamics
                beneath Thwaites really are.
              </p>
            </div>

            <ImageContainer
              src={"./assets/hot-water-drilling.jpeg"}
              caption={`BAS team deploying the hot water drill in Thwaites Glacier including Paul Anker, Keith Nicolls, James Smith, and Peter Davis.`}
              credit={` Icefin - ITGC, Schmidt.`}
            />
          </div>
        </Step>

        <Step data={7}>
          <div
            id={sections[7].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0 0 0",
            }}
          >
            <div
              // style={{
              //   width: "35vw",
              //   position: "relative",
              //   padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
              //   zIndex: "50",
              // }}
              className={`${styles.textContentContainer} ${styles.textShadow}`}
            >
              <hr />
              <AnimatedHeading type={"h2"}>
                Project MELT: Eyes Under the Ice
              </AnimatedHeading>
              <br />
              <p>
                These groundbreaking measurements were part of an ambitious
                scientific endeavor: the MELT project. As part of the
                International Thwaites Glacier Collaboration—one of the largest
                international field campaigns ever undertaken in Antarctica—MELT
                brings together scientists from five universities and the
                British Antarctic Survey in a joint U.S.-U.K. effort to
                understand how warm waters are affecting Thwaites Glacier.
              </p>
            </div>
          </div>
        </Step>

        <Step data={8}>
          <div
            id={sections[8].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0 0 0",
            }}
          >
            <div
              className={`${styles.textContentContainer} ${styles.textShadow}`}
            >
              <p>
                The project's approach is as innovative as it is comprehensive.
                Scientists drill holes through 600 meters of solid ice using hot
                water drills—creating pathways to deploy their sophisticated
                instruments. Through these boreholes, they lower Icefin, a
                state-of-the-art underwater robot equipped with cameras and
                sensors, to explore the mysterious cavity beneath the glacier.
                This remote-controlled vehicle acts as scientists' eyes and ears
                under the ice, gathering crucial data about water temperature,
                salinity, and currents.
              </p>
            </div>
          </div>
        </Step>

        <Step data={9}>
          <div
            id={sections[9].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0",
            }}
          >
            <ImageContainer
              src={"./assets/icefin-deployment.jpg"}
              caption={`Icefin deployment at Thwaites Glacier, January 2020.`}
              credit={` Icefin - ITGC, Dichek.`}
            />
            <div
              // style={{
              //   width: "35vw",
              //   position: "relative",
              //   padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
              //   zIndex: "50",
              // }}
              className={styles.textContentContainer}
            >
              <p>
                Above the ice, researchers use specialized radar systems to
                measure how quickly the glacier is melting from below, while
                airborne surveys map the complex network of channels through
                which warm water might be reaching the glacier's vulnerable
                underbelly. Together, these measurements help scientists better
                predict how Thwaites might contribute to future sea level rise.
              </p>
            </div>
          </div>
        </Step>

        <Step data={10}>
          <div
            id={sections[10].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0 0 0",
            }}
          >
            <div
              className={`${styles.textContentContainer} ${styles.textShadow}`}
            >
              <hr />
              <AnimatedHeading type={"h2"}>
                "But The Glacier is Still in Trouble."
              </AnimatedHeading>

              <p
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontFamily: "Roboto",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  lineHeight: "1.4rem",
                }}
              >
                <br />— Peter Davis, in interview with NYU News
              </p>
              <br />
              <p>
                Despite small amounts of melting, this finding offers no
                reassurance according to Davis's team. Even with less melting
                than predicted, the glacier continues its rapid retreat,
                suggesting that Thwaites is far more sensitive to climate change
                than previously understood. The glacier's delicate balance can
                be disrupted by even small changes in ocean temperature.
                <br />
                <br />
                The story became even more concerning in 2022. When David
                Holland, the lead U.S. principal investigator for the MELT
                project, led a team to western Thwaites, they made an alarming
                discovery. The melting rates they observed there were
                unprecedented—the highest ever recorded anywhere in
                Antarctica—suggesting that this section of the glacier may have
                already begun an irreversible retreat.
              </p>
            </div>
          </div>
        </Step>

        <Step data={11}>
          <div
            id={sections[11].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0 0 0",
            }}
          >
            <div
              className={`${styles.textContentContainer} ${styles.textShadow}`}
            >
              <p>
                In just over two decades, Thwaites has dramatically transformed.
                Its grounding zone, the crucial boundary where glacier meets
                seafloor, has pulled back more than eight miles—a retreat of 14
                kilometers that makes Thwaites one of Antarctica's
                fastest-changing glaciers.
              </p>
            </div>
          </div>
        </Step>
        <Step data={11}>
          <div
            id={sections[11].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0 0 0",
            }}
          >
            <div
              className={`${styles.textContentContainer} ${styles.textShadow}`}
            >
              <p>
                The situation is particularly alarming because much of Thwaites
                sits below sea level. This makes the glacier vulnerable to
                rapid, irreversible ice loss—a collapse that could raise global
                sea levels by more than half a meter within centuries.
              </p>
            </div>
          </div>
        </Step>

        <Step data={12}>
          <div
            id={sections[12].id}
            className={styles.section}
            style={{
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "50vh 0 0 0",
            }}
          >
            <div className={styles.textContentContainer}>
              <p>
                Scientists now project an even more immediate concern.
                <br />
                <br />
                By 2030, Thwaites is expected to lose its crucial grip on the
                underwater mountain that helps stabilize it.
              </p>
            </div>

            <ImageContainer
              src={"./assets/ice-cliff.jpg"}
              caption={`Ice cliffs of Thwaites Glacier.`}
              credit={` Rob Larter, British Antractic Survey.`}
              width={"35vw"}
            />
          </div>
        </Step>

        <Step data={13}>
          <div
            id={sections[13].id}
            className={styles.section}
            style={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers content vertically
              justifyContent: "flex-start", // Centers content horizontally
              // gap: "2rem", // Add vertical space between children
              padding: "20vh 0 10vh 0",
            }}
          >
            <div
              // style={{
              //   width: "35vw",
              //   position: "relative",
              //   padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
              //   zIndex: "50",
              // }}
              className={styles.textContentContainer}
            >
              <hr />
              <AnimatedHeading type={"h2"}>
                The Global Impact of a Melting Antarctica
              </AnimatedHeading>
              <br />
              <p>
                Rising seas threaten more than coastlines. This visualization
                based on the IPCC Special Report shows the cascading effects of
                ocean warming and polar ice loss. From marine ecosystems to
                mountain regions, the changes in Antarctica ripple across the
                globe, affecting everything from food security to water
                resources.
              </p>
            </div>

            <TreeDiagram data={"/data/impact-data.json"} />

            <div
              // style={{
              //   width: "35vw",
              //   position: "relative",
              //   padding: "1rem 3rem", // To offset slides a tiny bit from the left side of the screen
              //   zIndex: "50",
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "flex-start", // Centers content vertically
              //   justifyContent: "flex-start", // Centers content horizontally
              // }}
              className={styles.textContentContainer}
            >
              <hr className={styles.srcHr} />
              <br />
              <p className={styles.srcText} style={{}}>
                <span style={{ fontWeight: "600", lineHeight: "2rem" }}>
                  Sources:
                </span>
                <br />
                1. “Thwaites Glacier Facts”. The International Thwaites Glacier
                Collaboration.
                <br />
                2. “Thwaites Glacier Transformed“. NASA Earth Observatory.
                <br />
                3. Interview with Peter Davis of the British Antarctic Survey on
                September 6, 2023.
                <br />
                4. “The Threat from Thwaites: The retreat of Antarctica’s
                riskiest glacier”. #AGU21 Press Conference.
                <br />
                7. “Scientists Discover New Processes Driving Retreat of
                Thwaites Glacier”. NYU News.
                <br />
                8. “The fracturing of Antarctica’s Pine Island and Thwaites
                Glaciers (2014–2020)”. The European Space Agency.
                <br />
                9. "Special Report on the Ocean and Cryosphere in a Changing
                Climate: Technical Summary". The Intergovernmental Panel on
                Climate Change.
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </>
  );
}

export default ScrollamaContainer;
