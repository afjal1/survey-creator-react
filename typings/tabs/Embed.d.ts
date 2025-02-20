/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
import { EmbedModel } from "survey-creator-core";
interface ITabEmbedComponentProps {
    data: EmbedModel;
}
export declare class TabEmbedComponent extends SurveyElementBase<ITabEmbedComponentProps, any> {
    private get model();
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
export {};
