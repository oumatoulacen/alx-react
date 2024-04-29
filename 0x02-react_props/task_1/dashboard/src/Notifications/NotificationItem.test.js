import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
    it("NotificationItem renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    
    it("renders type and value props", () => {
        const wrapper = shallow(<NotificationItem type="default" value="New course available" />);
        expect(wrapper.text()).toBe("New course available");
        expect(wrapper.html()).toBe('<li data="default">New course available</li>');
    });
    
    it("renders html prop", () => {
        const wrapper = shallow(<NotificationItem type="urgent" html value="<strong>All new resumes</strong>" />);
        expect(wrapper.html()).toBe('<li data="urgent"><strong>All new resumes</strong></li>');
    });
});
