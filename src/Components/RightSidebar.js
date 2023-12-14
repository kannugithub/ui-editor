import React from "react";
import {
  AspectRatio,
  Language,
  Apple,
  Adb,
  FullscreenExit,
  Brush,
  Tune,
  Storage,
  AutoFixHigh,
  KeyboardArrowDown,
  Info,
  ExpandMore,
  ChevronRight,
  ToggleOff,
  AlignHorizontalCenter,
  FormatAlignCenter,
  AlignVerticalBottom,
  FormatAlignJustify,
  FormatTextdirectionRToL,
  AlignHorizontalLeft,
  VerticalAlignCenter,
  AlignHorizontalRight,
  FormatIndentIncrease,
  Segment,
  ArrowRightAlt
} from "@mui/icons-material";
import Accordion from "react-bootstrap/Accordion";

const RightSidebar = () => {
  return (
    <>
      <div className="main-right">
        <div className="inner">
          <div className="first-bar">
            <div className="left-bar">
              <p>PREVIEW</p>
              <div className="icons-tab">
                <span>
                  <AspectRatio />
                </span>
                <span>
                  <Language />
                </span>
                <span>
                  <Apple />
                </span>
                <span>
                  <Adb />
                </span>
              </div>
            </div>
            <div className="right-bar">
              <p>ENV</p>
              <div className="dev-bar">
                <p>Dev</p>
              </div>
            </div>
          </div>

          <div className="second-bar">
            <div className="inner">
              <span>
                <FullscreenExit />
              </span>
              <span>View</span>
            </div>
          </div>

          <div className="third-bar">
            <div className="inner">
              <div className="icns">
                <ul className="list">
                  <li>
                    <Brush />
                  </li>
                  <li>
                    <Tune />
                  </li>
                  <li>
                    <Storage />
                  </li>
                  <li>
                    <AutoFixHigh />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fourth-bar">
            <div className="inner">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Layout <Info /></Accordion.Header>
                  <Accordion.Body>
                    <div className="flex-sec">
                        <div className="sec-first">
                            <p>FLEX ITEMS</p>
                            <div className="direction-sec">
                                <div className="left-sev">
                                    <div className="d-main">
                                        <p>Direction</p>
                                    </div>
                                    <div className="d-sec">
                                        <span><ExpandMore /></span>
                                        <span><ChevronRight /></span>
                                    </div>
                                </div>
                                <div className="right-sec">
                                    <span><ToggleOff /></span>
                                    <span>Reserve</span>
                                </div>
                            </div>
                            <div className="direction-sec2">
                                <div className="left-sec">
                                    <p>Align</p>
                                </div>
                                <div className="right-sec">
                                    <span><AlignHorizontalCenter /></span>
                                    <span><FormatAlignCenter /></span>
                                    <span><AlignVerticalBottom /></span>
                                    <span><FormatAlignJustify /></span>
                                    <span><FormatTextdirectionRToL /></span>
                                </div>
                            </div>
                            <div className="direction-sec3">
                                <div className="left-sec">
                                    <p>Justify</p>
                                </div>
                                <div className="right-sec">
                                    <span><AlignHorizontalLeft /></span>
                                    <span><VerticalAlignCenter /></span>
                                    <span><AlignHorizontalRight /></span>
                                    <span className="bg-none"><FormatIndentIncrease /></span>
                                    <span><Segment /></span>
                                </div>
                            </div>
                        </div>

                        <div className="sec-first">
                            <p>Selected ITEM</p>
                            <div className="direction-sec2">
                                <div className="left-sec">
                                    <p>Align</p>
                                </div>
                                <div className="right-sec">
                                    <span><AlignHorizontalCenter /></span>
                                    <span><FormatAlignCenter /></span>
                                    <span><AlignVerticalBottom /></span>
                                    <span><FormatAlignJustify /></span>
                                    <span><FormatTextdirectionRToL /></span>
                                </div>
                            </div>
                            <div className="direction-sec3 selected-items-sec">
                                <div className="left-sec">
                                    <p>Flex</p>
                                </div>
                                <div className="right-sec1">
                                    <span className="numb">1</span>
                                </div>
                            </div>

                            <div className="advanced-sec">
                                <p>Advanced <ArrowRightAlt /></p>
                            </div>
                        </div>

                        <div className="sec-first border-none">
                            <p>CONTENT</p>
                            <div className="direction-sec2">
                                <div className="left-sec">
                                    <p>Wrap</p>
                                </div>
                                <div className="right-sec wrap-sec">
                                    <span>None</span>
                                    <span>Wrap</span>
                                    <span>Reverse</span>
                                </div>
                            </div>
                            <div className="direction-sec2">
                                <div className="left-sec">
                                    <p>Align</p>
                                </div>
                                <div className="right-sec">
                                    <span><AlignHorizontalCenter /></span>
                                    <span><FormatAlignCenter /></span>
                                    <span><AlignVerticalBottom /></span>
                                    <span><FormatAlignJustify /></span>
                                    <span><FormatTextdirectionRToL /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
