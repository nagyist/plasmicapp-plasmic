// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cQnF1HuwK97HkvkrC6uRk2
// Component: Jt0CZzY1xy
import * as React from "react";

import * as ph from "@plasmicapp/host";
import * as p from "@plasmicapp/react-web";

import {
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_analytics.module.css"; // plasmic-import: cQnF1HuwK97HkvkrC6uRk2/projectcss
import sty from "./PlasmicPeriodPicker.module.css"; // plasmic-import: Jt0CZzY1xy/css

export type PlasmicPeriodPicker__VariantMembers = {
  month: "month";
};

export type PlasmicPeriodPicker__VariantsArgs = {
  month?: SingleBooleanChoiceArg<"month">;
};

type VariantPropType = keyof PlasmicPeriodPicker__VariantsArgs;
export const PlasmicPeriodPicker__VariantProps = new Array<VariantPropType>(
  "month"
);

export type PlasmicPeriodPicker__ArgsType = {};
type ArgPropType = keyof PlasmicPeriodPicker__ArgsType;
export const PlasmicPeriodPicker__ArgProps = new Array<ArgPropType>();

export type PlasmicPeriodPicker__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  picker?: p.Flex<"div">;
  animationbox?: p.Flex<"div">;
  highlighter?: p.Flex<"div">;
  dayOption?: p.Flex<"div">;
  monthOption?: p.Flex<"div">;
};

export interface DefaultPeriodPickerProps {
  month?: SingleBooleanChoiceArg<"month">;
  className?: string;
}

function PlasmicPeriodPicker__RenderFunc(props: {
  variants: PlasmicPeriodPicker__VariantsArgs;
  args: PlasmicPeriodPicker__ArgsType;
  overrides: PlasmicPeriodPicker__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),

    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootmonth]: hasVariant(variants, "month", "month") }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"View by"}
      </div>

      <div
        data-plasmic-name={"picker"}
        data-plasmic-override={overrides.picker}
        className={classNames(projectcss.all, sty.picker, {
          [sty.pickermonth]: hasVariant(variants, "month", "month"),
        })}
      >
        <div
          data-plasmic-name={"animationbox"}
          data-plasmic-override={overrides.animationbox}
          className={classNames(projectcss.all, sty.animationbox, {
            [sty.animationboxmonth]: hasVariant(variants, "month", "month"),
          })}
        >
          <div
            data-plasmic-name={"highlighter"}
            data-plasmic-override={overrides.highlighter}
            className={classNames(projectcss.all, sty.highlighter)}
          />
        </div>

        <div
          data-plasmic-name={"dayOption"}
          data-plasmic-override={overrides.dayOption}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.dayOption,
            { [sty.dayOptionmonth]: hasVariant(variants, "month", "month") }
          )}
        >
          {"Day"}
        </div>

        <div
          data-plasmic-name={"monthOption"}
          data-plasmic-override={overrides.monthOption}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.monthOption,
            { [sty.monthOptionmonth]: hasVariant(variants, "month", "month") }
          )}
        >
          {"Month"}
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "picker",
    "animationbox",
    "highlighter",
    "dayOption",
    "monthOption",
  ],

  text: ["text"],
  picker: ["picker", "animationbox", "highlighter", "dayOption", "monthOption"],
  animationbox: ["animationbox", "highlighter"],
  highlighter: ["highlighter"],
  dayOption: ["dayOption"],
  monthOption: ["monthOption"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  picker: "div";
  animationbox: "div";
  highlighter: "div";
  dayOption: "div";
  monthOption: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPeriodPicker__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPeriodPicker__VariantsArgs;
    args?: PlasmicPeriodPicker__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPeriodPicker__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPeriodPicker__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPeriodPicker__ArgProps,
          internalVariantPropNames: PlasmicPeriodPicker__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicPeriodPicker__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPeriodPicker";
  } else {
    func.displayName = `PlasmicPeriodPicker.${nodeName}`;
  }
  return func;
}

export const PlasmicPeriodPicker = Object.assign(
  // Top-level PlasmicPeriodPicker renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    picker: makeNodeComponent("picker"),
    animationbox: makeNodeComponent("animationbox"),
    highlighter: makeNodeComponent("highlighter"),
    dayOption: makeNodeComponent("dayOption"),
    monthOption: makeNodeComponent("monthOption"),

    // Metadata about props expected for PlasmicPeriodPicker
    internalVariantProps: PlasmicPeriodPicker__VariantProps,
    internalArgProps: PlasmicPeriodPicker__ArgProps,
  }
);

export default PlasmicPeriodPicker;
/* prettier-ignore-end */
