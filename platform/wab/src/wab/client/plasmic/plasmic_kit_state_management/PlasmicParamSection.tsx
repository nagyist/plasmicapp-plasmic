// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: frhoorZk3bxNXU73uUyvHm
// Component: RzN6mQN5_D

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import LabeledItem from "../../components/sidebar-tabs/StateManagement/LabeledItem"; // plasmic-import: EmZVqVuGE1/component
import StyleSelect from "../../components/style-controls/StyleSelect"; // plasmic-import: E0bKgamUEin/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import CollapsableSection from "../../components/widgets/CollapsableSection"; // plasmic-import: OW_7AtJANr/component
import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import Switch from "../../components/widgets/Switch"; // plasmic-import: b35JDgXpbiF/component
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_state_management.module.css"; // plasmic-import: frhoorZk3bxNXU73uUyvHm/projectcss
import sty from "./PlasmicParamSection.module.css"; // plasmic-import: RzN6mQN5_D/css

import PlusIcon from "../plasmic_kit/PlasmicIcon__Plus"; // plasmic-import: -k064DlQ8k8-L/icon
import ArrowRightsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ArrowRightSvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon
import ClosesvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__CloseSvg"; // plasmic-import: DhvEHyCHT/icon
import PlussvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__PlusSvg"; // plasmic-import: sQKgd2GNr/icon
import SearchsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__SearchSvg"; // plasmic-import: R5DLz11OA/icon

createPlasmicElementProxy;

export type PlasmicParamSection__VariantMembers = {
  specialParamType: "eventHandler" | "localizable";
  isInvalid: "isInvalid";
  hidePropType: "hidePropType";
  hideDefaultValue: "hideDefaultValue";
  showAdvancedSection: "showAdvancedSection";
  hideEventArgs: "hideEventArgs";
  fixedParamType: "fixedParamType";
};
export type PlasmicParamSection__VariantsArgs = {
  specialParamType?: SingleChoiceArg<"eventHandler" | "localizable">;
  isInvalid?: SingleBooleanChoiceArg<"isInvalid">;
  hidePropType?: SingleBooleanChoiceArg<"hidePropType">;
  hideDefaultValue?: SingleBooleanChoiceArg<"hideDefaultValue">;
  showAdvancedSection?: SingleBooleanChoiceArg<"showAdvancedSection">;
  hideEventArgs?: SingleBooleanChoiceArg<"hideEventArgs">;
  fixedParamType?: SingleBooleanChoiceArg<"fixedParamType">;
};
type VariantPropType = keyof PlasmicParamSection__VariantsArgs;
export const PlasmicParamSection__VariantProps = new Array<VariantPropType>(
  "specialParamType",
  "isInvalid",
  "hidePropType",
  "hideDefaultValue",
  "showAdvancedSection",
  "hideEventArgs",
  "fixedParamType"
);

export type PlasmicParamSection__ArgsType = {
  componentName?: string;
  defaultArgs?: React.ReactNode;
  plusIcon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicParamSection__ArgsType;
export const PlasmicParamSection__ArgProps = new Array<ArgPropType>(
  "componentName",
  "defaultArgs",
  "plusIcon"
);

export type PlasmicParamSection__OverridesType = {
  root?: Flex__<"div">;
  name?: Flex__<"div">;
  paramName?: Flex__<typeof Textbox>;
  paramType?: Flex__<typeof Select>;
  existingParamType?: Flex__<typeof Textbox>;
  defaultValue?: Flex__<typeof Textbox>;
  previewValue?: Flex__<typeof Textbox>;
  localizableSwitch?: Flex__<typeof Switch>;
  advancedSection?: Flex__<typeof CollapsableSection>;
  advancedContent?: Flex__<"div">;
  cancelBtn?: Flex__<typeof Button>;
  confirmBtn?: Flex__<typeof Button>;
};

export interface DefaultParamSectionProps {
  componentName?: string;
  defaultArgs?: React.ReactNode;
  plusIcon?: React.ReactNode;
  specialParamType?: SingleChoiceArg<"eventHandler" | "localizable">;
  isInvalid?: SingleBooleanChoiceArg<"isInvalid">;
  hidePropType?: SingleBooleanChoiceArg<"hidePropType">;
  hideDefaultValue?: SingleBooleanChoiceArg<"hideDefaultValue">;
  showAdvancedSection?: SingleBooleanChoiceArg<"showAdvancedSection">;
  hideEventArgs?: SingleBooleanChoiceArg<"hideEventArgs">;
  fixedParamType?: SingleBooleanChoiceArg<"fixedParamType">;
  className?: string;
}

const $$ = {};

function PlasmicParamSection__RenderFunc(props: {
  variants: PlasmicParamSection__VariantsArgs;
  args: PlasmicParamSection__ArgsType;
  overrides: PlasmicParamSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          componentName: "ComponentName",
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "specialParamType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.specialParamType,
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
      },
      {
        path: "isInvalid",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isInvalid,
      },
      {
        path: "hidePropType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hidePropType,
      },
      {
        path: "hideDefaultValue",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.hideDefaultValue,
      },
      {
        path: "paramType.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
      },
      {
        path: "showAdvancedSection",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showAdvancedSection,
      },
      {
        path: "hideEventArgs",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideEventArgs,
      },
      {
        path: "fixedParamType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.fixedParamType,
      },
      {
        path: "localizableSwitch.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
      },
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <Stack__
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
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        {
          [sty.roothideEventArgs]: hasVariant(
            $state,
            "hideEventArgs",
            "hideEventArgs"
          ),
          [sty.roothidePropType]: hasVariant(
            $state,
            "hidePropType",
            "hidePropType"
          ),
          [sty.rootisInvalid]: hasVariant($state, "isInvalid", "isInvalid"),
          [sty.rootspecialParamType_eventHandler]: hasVariant(
            $state,
            "specialParamType",
            "eventHandler"
          ),
          [sty.rootspecialParamType_eventHandler_hideEventArgs]:
            hasVariant($state, "hideEventArgs", "hideEventArgs") &&
            hasVariant($state, "specialParamType", "eventHandler"),
          [sty.rootspecialParamType_localizable]: hasVariant(
            $state,
            "specialParamType",
            "localizable"
          ),
        }
      )}
    >
      <LabeledItem
        className={classNames("__wab_instance", sty.labeledItem___92Vd)}
        label={
          <div
            data-plasmic-name={"name"}
            data-plasmic-override={overrides.name}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.name
            )}
          >
            {"Name"}
          </div>
        }
        layout={"vertical"}
        value={
          <Textbox
            data-plasmic-name={"paramName"}
            data-plasmic-override={overrides.paramName}
            className={classNames("__wab_instance", sty.paramName, {
              [sty.paramNamefixedParamType]: hasVariant(
                $state,
                "fixedParamType",
                "fixedParamType"
              ),
            })}
            prefixIcon={
              <SearchsvgIcon
                className={classNames(projectcss.all, sty.svg__sGplF)}
                role={"img"}
              />
            }
            styleType={["bordered"]}
            suffixIcon={
              <ClosesvgIcon
                className={classNames(projectcss.all, sty.svg__oc6C2)}
                role={"img"}
              />
            }
          />
        }
      />

      <LabeledItem
        className={classNames("__wab_instance", sty.labeledItem__iRfEp, {
          [sty.labeledItemhideEventArgs__iRfEpsA5H]: hasVariant(
            $state,
            "hideEventArgs",
            "hideEventArgs"
          ),
          [sty.labeledItemhidePropType__iRfEp4IfzH]: hasVariant(
            $state,
            "hidePropType",
            "hidePropType"
          ),
          [sty.labeledItemspecialParamType_eventHandler__iRfEpmsWcM]:
            hasVariant($state, "specialParamType", "eventHandler"),
        })}
        label={"Type"}
        layout={"vertical"}
        value={
          <React.Fragment>
            <Select
              data-plasmic-name={"paramType"}
              data-plasmic-override={overrides.paramType}
              className={classNames("__wab_instance", sty.paramType, {
                [sty.paramTypefixedParamType]: hasVariant(
                  $state,
                  "fixedParamType",
                  "fixedParamType"
                ),
                [sty.paramTypehidePropType]: hasVariant(
                  $state,
                  "hidePropType",
                  "hidePropType"
                ),
              })}
              icon={
                <PlussvgIcon
                  className={classNames(projectcss.all, sty.svg__glNxP)}
                  role={"img"}
                />
              }
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["paramType", "value"])(
                  eventArgs[0]
                );
              }}
              type={"bordered"}
              value={generateStateValueProp($state, ["paramType", "value"])}
            />

            {(
              hasVariant($state, "fixedParamType", "fixedParamType")
                ? true
                : false
            ) ? (
              <Textbox
                data-plasmic-name={"existingParamType"}
                data-plasmic-override={overrides.existingParamType}
                className={classNames("__wab_instance", sty.existingParamType, {
                  [sty.existingParamTypefixedParamType]: hasVariant(
                    $state,
                    "fixedParamType",
                    "fixedParamType"
                  ),
                })}
                disabled={true}
                prefixIcon={
                  <SearchsvgIcon
                    className={classNames(projectcss.all, sty.svg__bV23)}
                    role={"img"}
                  />
                }
                styleType={["bordered"]}
                suffixIcon={
                  <ClosesvgIcon
                    className={classNames(projectcss.all, sty.svg__cLA)}
                    role={"img"}
                  />
                }
              />
            ) : null}
          </React.Fragment>
        }
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__dmbqJ, {
          [sty.freeBoxspecialParamType_eventHandler__dmbqJmsWcM]: hasVariant(
            $state,
            "specialParamType",
            "eventHandler"
          ),
          [sty.freeBoxspecialParamType_eventHandler_hideEventArgs__dmbqJmsWcMSA5H]:
            hasVariant($state, "hideEventArgs", "hideEventArgs") &&
            hasVariant($state, "specialParamType", "eventHandler"),
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__ar9B2, {
            [sty.freeBoxspecialParamType_eventHandler__ar9B2MsWcM]: hasVariant(
              $state,
              "specialParamType",
              "eventHandler"
            ),
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fc5B,
              {
                [sty.textspecialParamType_eventHandler__fc5BMsWcM]: hasVariant(
                  $state,
                  "specialParamType",
                  "eventHandler"
                ),
                [sty.textspecialParamType_eventHandler_hideEventArgs__fc5BMsWcMSA5H]:
                  hasVariant($state, "hideEventArgs", "hideEventArgs") &&
                  hasVariant($state, "specialParamType", "eventHandler"),
              }
            )}
          >
            {"Event handler arguments"}
          </div>
          {renderPlasmicSlot({
            defaultContents: (
              <PlusIcon
                className={classNames(projectcss.all, sty.svg__di6Bz)}
                role={"img"}
              />
            ),

            value: args.plusIcon,
          })}
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zeXjI)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__obrQc, {
              [sty.freeBoxspecialParamType_eventHandler__obrQcmsWcM]:
                hasVariant($state, "specialParamType", "eventHandler"),
            })}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <LabeledItem
                    className={classNames(
                      "__wab_instance",
                      sty.labeledItem__abrAb
                    )}
                    label={
                      <Textbox
                        className={classNames(
                          "__wab_instance",
                          sty.textbox__qpBpB
                        )}
                        prefixIcon={
                          <SearchsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ycNij
                            )}
                            role={"img"}
                          />
                        }
                        styleType={["bordered"]}
                        suffixIcon={
                          <ClosesvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__iA3U
                            )}
                            role={"img"}
                          />
                        }
                      />
                    }
                    labelSize={"half"}
                    value={
                      <StyleSelect
                        className={classNames(
                          "__wab_instance",
                          sty.styleSelect__y4IeA
                        )}
                        valueSetState={"isSet"}
                      />
                    }
                    withRightExtras={true}
                  />

                  <LabeledItem
                    className={classNames(
                      "__wab_instance",
                      sty.labeledItem__nMprJ
                    )}
                    label={
                      <Textbox
                        className={classNames(
                          "__wab_instance",
                          sty.textbox___8ZDkV
                        )}
                        prefixIcon={
                          <SearchsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__rKRik
                            )}
                            role={"img"}
                          />
                        }
                        styleType={["bordered"]}
                        suffixIcon={
                          <ClosesvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__iIwRm
                            )}
                            role={"img"}
                          />
                        }
                      />
                    }
                    labelSize={"half"}
                    value={
                      <StyleSelect
                        className={classNames(
                          "__wab_instance",
                          sty.styleSelect__mYuzw
                        )}
                        valueSetState={"isSet"}
                      />
                    }
                    withRightExtras={true}
                  />

                  <LabeledItem
                    className={classNames(
                      "__wab_instance",
                      sty.labeledItem___7CGry
                    )}
                    label={
                      <Textbox
                        className={classNames(
                          "__wab_instance",
                          sty.textbox__equRj
                        )}
                        prefixIcon={
                          <SearchsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___9RteI
                            )}
                            role={"img"}
                          />
                        }
                        styleType={["bordered"]}
                        suffixIcon={
                          <ClosesvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__dnSl
                            )}
                            role={"img"}
                          />
                        }
                      />
                    }
                    labelSize={"half"}
                    value={
                      <StyleSelect
                        className={classNames(
                          "__wab_instance",
                          sty.styleSelect__w7TE
                        )}
                        valueSetState={"isSet"}
                      />
                    }
                    withRightExtras={true}
                  />
                </React.Fragment>
              ),

              value: args.defaultArgs,
            })}
          </Stack__>
        </Stack__>
      </Stack__>
      <LabeledItem
        className={classNames("__wab_instance", sty.labeledItem__v8T1, {
          [sty.labeledItemhideDefaultValue__v8T1O2Rlb]: hasVariant(
            $state,
            "hideDefaultValue",
            "hideDefaultValue"
          ),
          [sty.labeledItemhideEventArgs__v8T1SA5H]: hasVariant(
            $state,
            "hideEventArgs",
            "hideEventArgs"
          ),
          [sty.labeledItemspecialParamType_eventHandler__v8T1MsWcM]: hasVariant(
            $state,
            "specialParamType",
            "eventHandler"
          ),
        })}
        label={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pxpk9
            )}
          >
            {"Default Value"}
          </div>
        }
        layout={"vertical"}
        value={
          <Textbox
            data-plasmic-name={"defaultValue"}
            data-plasmic-override={overrides.defaultValue}
            className={classNames("__wab_instance", sty.defaultValue, {
              [sty.defaultValueisInvalid]: hasVariant(
                $state,
                "isInvalid",
                "isInvalid"
              ),
            })}
            prefixIcon={
              <SearchsvgIcon
                className={classNames(projectcss.all, sty.svg__t0DBp)}
                role={"img"}
              />
            }
            styleType={["bordered"]}
            suffixIcon={
              <ClosesvgIcon
                className={classNames(projectcss.all, sty.svg__e2UsG)}
                role={"img"}
              />
            }
          />
        }
      />

      <LabeledItem
        className={classNames("__wab_instance", sty.labeledItem___9VyMq, {
          [sty.labeledItemhideDefaultValue___9VyMQo2Rlb]: hasVariant(
            $state,
            "hideDefaultValue",
            "hideDefaultValue"
          ),
          [sty.labeledItemhideEventArgs___9VyMQsA5H]: hasVariant(
            $state,
            "hideEventArgs",
            "hideEventArgs"
          ),
          [sty.labeledItemspecialParamType_eventHandler___9VyMQmsWcM]:
            hasVariant($state, "specialParamType", "eventHandler"),
        })}
        label={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r3Qg,
              {
                [sty.textspecialParamType_localizable__r3QglJaHq]: hasVariant(
                  $state,
                  "specialParamType",
                  "localizable"
                ),
              }
            )}
          >
            {"Preview Value"}
          </div>
        }
        layout={"vertical"}
        value={
          <Textbox
            data-plasmic-name={"previewValue"}
            data-plasmic-override={overrides.previewValue}
            className={classNames("__wab_instance", sty.previewValue, {
              [sty.previewValueisInvalid]: hasVariant(
                $state,
                "isInvalid",
                "isInvalid"
              ),
            })}
            prefixIcon={
              <SearchsvgIcon
                className={classNames(projectcss.all, sty.svg__rKvYf)}
                role={"img"}
              />
            }
            styleType={["bordered"]}
            suffixIcon={
              <ClosesvgIcon
                className={classNames(projectcss.all, sty.svg__n9QnU)}
                role={"img"}
              />
            }
          />
        }
      />

      <Switch
        data-plasmic-name={"localizableSwitch"}
        data-plasmic-override={overrides.localizableSwitch}
        className={classNames("__wab_instance", sty.localizableSwitch, {
          [sty.localizableSwitchspecialParamType_localizable]: hasVariant(
            $state,
            "specialParamType",
            "localizable"
          ),
        })}
        isChecked={
          generateStateValueProp($state, ["localizableSwitch", "isChecked"]) ??
          false
        }
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["localizableSwitch", "isChecked"])(
            eventArgs[0]
          );
        }}
      >
        {"Localizable"}
      </Switch>
      {(
        hasVariant($state, "showAdvancedSection", "showAdvancedSection")
          ? true
          : false
      ) ? (
        <CollapsableSection
          data-plasmic-name={"advancedSection"}
          data-plasmic-override={overrides.advancedSection}
          className={classNames("__wab_instance", sty.advancedSection, {
            [sty.advancedSectionshowAdvancedSection]: hasVariant(
              $state,
              "showAdvancedSection",
              "showAdvancedSection"
            ),
          })}
        >
          <div
            data-plasmic-name={"advancedContent"}
            data-plasmic-override={overrides.advancedContent}
            className={classNames(projectcss.all, sty.advancedContent)}
          />
        </CollapsableSection>
      ) : null}
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__j1TSc, {
          [sty.freeBoxhidePropType__j1TSc4IfzH]: hasVariant(
            $state,
            "hidePropType",
            "hidePropType"
          ),
        })}
      >
        <Button
          data-plasmic-name={"cancelBtn"}
          data-plasmic-override={overrides.cancelBtn}
          className={classNames("__wab_instance", sty.cancelBtn)}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg___0WzAj)}
              role={"img"}
            />
          }
          startIcon={
            <ArrowRightsvgIcon
              className={classNames(projectcss.all, sty.svg___6SZod)}
              role={"img"}
            />
          }
        >
          {"Cancel"}
        </Button>
        <Button
          data-plasmic-name={"confirmBtn"}
          data-plasmic-override={overrides.confirmBtn}
          className={classNames("__wab_instance", sty.confirmBtn)}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__caNgI)}
              role={"img"}
            />
          }
          startIcon={
            <ArrowRightsvgIcon
              className={classNames(projectcss.all, sty.svg__v7Y1W)}
              role={"img"}
            />
          }
          type={["primary"]}
        >
          {"Confirm"}
        </Button>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "name",
    "paramName",
    "paramType",
    "existingParamType",
    "defaultValue",
    "previewValue",
    "localizableSwitch",
    "advancedSection",
    "advancedContent",
    "cancelBtn",
    "confirmBtn",
  ],

  name: ["name"],
  paramName: ["paramName"],
  paramType: ["paramType"],
  existingParamType: ["existingParamType"],
  defaultValue: ["defaultValue"],
  previewValue: ["previewValue"],
  localizableSwitch: ["localizableSwitch"],
  advancedSection: ["advancedSection", "advancedContent"],
  advancedContent: ["advancedContent"],
  cancelBtn: ["cancelBtn"],
  confirmBtn: ["confirmBtn"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  name: "div";
  paramName: typeof Textbox;
  paramType: typeof Select;
  existingParamType: typeof Textbox;
  defaultValue: typeof Textbox;
  previewValue: typeof Textbox;
  localizableSwitch: typeof Switch;
  advancedSection: typeof CollapsableSection;
  advancedContent: "div";
  cancelBtn: typeof Button;
  confirmBtn: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicParamSection__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicParamSection__VariantsArgs;
    args?: PlasmicParamSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicParamSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicParamSection__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicParamSection__ArgProps,
          internalVariantPropNames: PlasmicParamSection__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicParamSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicParamSection";
  } else {
    func.displayName = `PlasmicParamSection.${nodeName}`;
  }
  return func;
}

export const PlasmicParamSection = Object.assign(
  // Top-level PlasmicParamSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _name: makeNodeComponent("name"),
    paramName: makeNodeComponent("paramName"),
    paramType: makeNodeComponent("paramType"),
    existingParamType: makeNodeComponent("existingParamType"),
    defaultValue: makeNodeComponent("defaultValue"),
    previewValue: makeNodeComponent("previewValue"),
    localizableSwitch: makeNodeComponent("localizableSwitch"),
    advancedSection: makeNodeComponent("advancedSection"),
    advancedContent: makeNodeComponent("advancedContent"),
    cancelBtn: makeNodeComponent("cancelBtn"),
    confirmBtn: makeNodeComponent("confirmBtn"),

    // Metadata about props expected for PlasmicParamSection
    internalVariantProps: PlasmicParamSection__VariantProps,
    internalArgProps: PlasmicParamSection__ArgProps,
  }
);

export default PlasmicParamSection;
/* prettier-ignore-end */
