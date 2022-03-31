/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AcknowledgeEvent } from "./components/custom-alert/custom-alert";
import { TabActivateEvent } from "./components/custom-tab/custom-tab";
export namespace Components {
    interface CustomAlert {
        "kind": "info" | "success" | "error";
        "text": string;
    }
    interface CustomModal {
        "content": string;
        "open": () => Promise<void>;
        "title": string;
    }
    interface CustomTab {
        "active": boolean;
        "name": string;
    }
    interface CustomTabs {
        "activeTab": string;
    }
}
declare global {
    interface HTMLCustomAlertElement extends Components.CustomAlert, HTMLStencilElement {
    }
    var HTMLCustomAlertElement: {
        prototype: HTMLCustomAlertElement;
        new (): HTMLCustomAlertElement;
    };
    interface HTMLCustomModalElement extends Components.CustomModal, HTMLStencilElement {
    }
    var HTMLCustomModalElement: {
        prototype: HTMLCustomModalElement;
        new (): HTMLCustomModalElement;
    };
    interface HTMLCustomTabElement extends Components.CustomTab, HTMLStencilElement {
    }
    var HTMLCustomTabElement: {
        prototype: HTMLCustomTabElement;
        new (): HTMLCustomTabElement;
    };
    interface HTMLCustomTabsElement extends Components.CustomTabs, HTMLStencilElement {
    }
    var HTMLCustomTabsElement: {
        prototype: HTMLCustomTabsElement;
        new (): HTMLCustomTabsElement;
    };
    interface HTMLElementTagNameMap {
        "custom-alert": HTMLCustomAlertElement;
        "custom-modal": HTMLCustomModalElement;
        "custom-tab": HTMLCustomTabElement;
        "custom-tabs": HTMLCustomTabsElement;
    }
}
declare namespace LocalJSX {
    interface CustomAlert {
        "kind"?: "info" | "success" | "error";
        "onAcknowledge"?: (event: CustomEvent<AcknowledgeEvent>) => void;
        "text"?: string;
    }
    interface CustomModal {
        "content"?: string;
        "title"?: string;
    }
    interface CustomTab {
        "active"?: boolean;
        "name"?: string;
        "onTabActivate"?: (event: CustomEvent<TabActivateEvent>) => void;
    }
    interface CustomTabs {
        "activeTab"?: string;
    }
    interface IntrinsicElements {
        "custom-alert": CustomAlert;
        "custom-modal": CustomModal;
        "custom-tab": CustomTab;
        "custom-tabs": CustomTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-alert": LocalJSX.CustomAlert & JSXBase.HTMLAttributes<HTMLCustomAlertElement>;
            "custom-modal": LocalJSX.CustomModal & JSXBase.HTMLAttributes<HTMLCustomModalElement>;
            "custom-tab": LocalJSX.CustomTab & JSXBase.HTMLAttributes<HTMLCustomTabElement>;
            "custom-tabs": LocalJSX.CustomTabs & JSXBase.HTMLAttributes<HTMLCustomTabsElement>;
        }
    }
}
