// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: lzLkhV0UJA

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicTooltip.module.css"; // plasmic-import: lzLkhV0UJA/css

import InfoIcon from "../plasmic_kit/PlasmicIcon__Info"; // plasmic-import: BjAly3N4fWuWe/icon

createPlasmicElementProxy;

export type PlasmicTooltip__VariantMembers = {
  placement: "topLeft" | "bottomRight";
};
export type PlasmicTooltip__VariantsArgs = {
  placement?: SingleChoiceArg<"topLeft" | "bottomRight">;
};
type VariantPropType = keyof PlasmicTooltip__VariantsArgs;
export const PlasmicTooltip__VariantProps = new Array<VariantPropType>(
  "placement"
);

export type PlasmicTooltip__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTooltip__ArgsType;
export const PlasmicTooltip__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTooltip__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  invisibleRegion?: p.Flex<"div">;
  floatingWindow?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultTooltipProps {
  children?: React.ReactNode;
  placement?: SingleChoiceArg<"topLeft" | "bottomRight">;
  className?: string;
}

const $$ = {};

function PlasmicTooltip__RenderFunc(props: {
  variants: PlasmicTooltip__VariantsArgs;
  args: PlasmicTooltip__ArgsType;
  overrides: PlasmicTooltip__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true,
      },
      {
        path: "placement",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.placement,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxplacement_bottomRight]: hasVariant(
            $state,
            "placement",
            "bottomRight"
          ),
          [sty.freeBoxplacement_topLeft]: hasVariant(
            $state,
            "placement",
            "topLeft"
          ),
        })}
      >
        {(() => {
          try {
            return $state.isOpen;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div
            data-plasmic-name={"invisibleRegion"}
            data-plasmic-override={overrides.invisibleRegion}
            className={classNames(projectcss.all, sty.invisibleRegion, {
              [sty.invisibleRegionplacement_bottomRight]: hasVariant(
                $state,
                "placement",
                "bottomRight"
              ),
              [sty.invisibleRegionplacement_topLeft]: hasVariant(
                $state,
                "placement",
                "topLeft"
              ),
            })}
            onMouseOut={async (event) => {
              const $steps = {};

              $steps["setIsOpen"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["isOpen"],
                      },
                      operation: 0,
                      value: false,
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      p.set(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                typeof $steps["setIsOpen"] === "object" &&
                typeof $steps["setIsOpen"].then === "function"
              ) {
                $steps["setIsOpen"] = await $steps["setIsOpen"];
              }
            }}
          >
            <div
              data-plasmic-name={"floatingWindow"}
              data-plasmic-override={overrides.floatingWindow}
              className={classNames(projectcss.all, sty.floatingWindow, {
                [sty.floatingWindowplacement_bottomRight]: hasVariant(
                  $state,
                  "placement",
                  "bottomRight"
                ),
                [sty.floatingWindowplacement_topLeft]: hasVariant(
                  $state,
                  "placement",
                  "topLeft"
                ),
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pcxZh
                      )}
                    >
                      {"Tips"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sm96
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mi, consequat a bibendum sed, eleifend in metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in ipsum lobortis, vestibulum leo in, euismod nisl. Aenean ut pharetra diam. Mauris ligula lacus, blandit non ultrices non, vehicula a elit. Proin sit amet nisl viverra, tristique risus sit amet, eleifend nibh. Ut ornare metus eu ante ultrices, at consequat tortor laoreet. Ut at mollis leo."
                      }
                    </div>
                  </React.Fragment>
                ),
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenplacement_topLeft]: hasVariant(
                    $state,
                    "placement",
                    "topLeft"
                  ),
                }),
              })}
            </div>
          </div>
        ) : null}
      </div>
      <InfoIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgplacement_topLeft]: hasVariant(
            $state,
            "placement",
            "topLeft"
          ),
        })}
        onMouseOver={async (event) => {
          const $steps = {};

          $steps["setIsOpen"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["isOpen"],
                  },
                  operation: 0,
                  value: true,
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  p.set(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            typeof $steps["setIsOpen"] === "object" &&
            typeof $steps["setIsOpen"].then === "function"
          ) {
            $steps["setIsOpen"] = await $steps["setIsOpen"];
          }
        }}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "invisibleRegion", "floatingWindow", "svg"],
  freeBox: ["freeBox", "invisibleRegion", "floatingWindow"],
  invisibleRegion: ["invisibleRegion", "floatingWindow"],
  floatingWindow: ["floatingWindow"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  invisibleRegion: "div";
  floatingWindow: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTooltip__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTooltip__VariantsArgs;
    args?: PlasmicTooltip__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTooltip__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTooltip__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicTooltip__ArgProps,
          internalVariantPropNames: PlasmicTooltip__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTooltip__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTooltip";
  } else {
    func.displayName = `PlasmicTooltip.${nodeName}`;
  }
  return func;
}

export const PlasmicTooltip = Object.assign(
  // Top-level PlasmicTooltip renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    invisibleRegion: makeNodeComponent("invisibleRegion"),
    floatingWindow: makeNodeComponent("floatingWindow"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTooltip
    internalVariantProps: PlasmicTooltip__VariantProps,
    internalArgProps: PlasmicTooltip__ArgProps,
  }
);

export default PlasmicTooltip;
/* prettier-ignore-end */