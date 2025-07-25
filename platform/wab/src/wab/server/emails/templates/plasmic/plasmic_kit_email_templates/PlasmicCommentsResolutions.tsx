/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: taNK5uwsoPrzfpYmBVwUwX
// Component: rUeSkh2_5k3b

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import { EmailRow, EmailSection } from "@/wab/server/emails/components.tsx"; // plasmic-import: ccI_uNhThjcT/codeComponent
import AtomsCard from "../../AtomsCard"; // plasmic-import: 2cidd9ockVoM/component
import CommentsComment from "../../CommentsComment"; // plasmic-import: NUaRKxTU3gYx/component

createPlasmicElementProxy;

export type PlasmicCommentsResolutions__VariantMembers = {};
export type PlasmicCommentsResolutions__VariantsArgs = {};
type VariantPropType = keyof PlasmicCommentsResolutions__VariantsArgs;
export const PlasmicCommentsResolutions__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCommentsResolutions__ArgsType = {
  projectUrl?: string;
  resolutions?: any;
};
type ArgPropType = keyof PlasmicCommentsResolutions__ArgsType;
export const PlasmicCommentsResolutions__ArgProps = new Array<ArgPropType>(
  "projectUrl",
  "resolutions"
);

export type PlasmicCommentsResolutions__OverridesType = {
  root?: Flex__<typeof EmailSection>;
  emailRow?: Flex__<typeof EmailRow>;
  atomsCard?: Flex__<typeof AtomsCard>;
  commentsComment?: Flex__<typeof CommentsComment>;
};

export interface DefaultCommentsResolutionsProps {
  projectUrl?: string;
  resolutions?: any;
  className?: string;
}

const $$ = {};

function PlasmicCommentsResolutions__RenderFunc(props: {
  variants: PlasmicCommentsResolutions__VariantsArgs;
  args: PlasmicCommentsResolutions__ArgsType;
  overrides: PlasmicCommentsResolutions__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          projectUrl: "https://plasmic.app",
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
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

  return (
    <EmailSection
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        "root_reset_taNK5uwsoPrzfpYmBVwUwX",
        "plasmic_default_styles",
        "plasmic_mixins",
        "plasmic_tokens",
        "CommentsResolutions__root__qaEih"
      )}
      style={{ marginBottom: 48 }}
    >
      {((_par) => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return $props.resolutions;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return [];
            }
            throw e;
          }
        })()
      ).map((__plasmic_item_0, __plasmic_idx_0) => {
        const currentItem = __plasmic_item_0;
        const currentIndex = __plasmic_idx_0;
        return (
          <EmailRow
            data-plasmic-name={"emailRow"}
            data-plasmic-override={overrides.emailRow}
            className={classNames(
              "__wab_instance",
              "CommentsResolutions__emailRow__kMUu"
            )}
            key={currentIndex}
            style={{ marginBottom: 16 }}
          >
            <AtomsCard
              data-plasmic-name={"atomsCard"}
              data-plasmic-override={overrides.atomsCard}
              className={classNames(
                "__wab_instance",
                "CommentsResolutions__atomsCard___7JlxT"
              )}
            >
              <CommentsComment
                data-plasmic-name={"commentsComment"}
                data-plasmic-override={overrides.commentsComment}
                aboutCommentText={(() => {
                  try {
                    return `${currentItem.name} ${
                      currentItem.resolved ? "resolved" : "reopened"
                    } a comment`;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                avatarUrl={(() => {
                  try {
                    return currentItem.rootComment.avatarUrl;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "https://img.plasmic.app/img-optimizer/v1/img/f86d5d7ae700c37dd8db36806074f231.png";
                    }
                    throw e;
                  }
                })()}
                className={classNames(
                  "__wab_instance",
                  "CommentsResolutions__commentsComment__kXkH"
                )}
                content={(() => {
                  try {
                    return currentItem.rootComment.body;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                link={(() => {
                  try {
                    return currentItem.link;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                name={(() => {
                  try {
                    return currentItem.rootComment.name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                withLink={true}
              />
            </AtomsCard>
          </EmailRow>
        );
      })}
    </EmailSection>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "emailRow", "atomsCard", "commentsComment"],
  emailRow: ["emailRow", "atomsCard", "commentsComment"],
  atomsCard: ["atomsCard", "commentsComment"],
  commentsComment: ["commentsComment"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof EmailSection;
  emailRow: typeof EmailRow;
  atomsCard: typeof AtomsCard;
  commentsComment: typeof CommentsComment;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCommentsResolutions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCommentsResolutions__VariantsArgs;
    args?: PlasmicCommentsResolutions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCommentsResolutions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCommentsResolutions__ArgsType, ReservedPropsType> &
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCommentsResolutions__ArgProps,
          internalVariantPropNames: PlasmicCommentsResolutions__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCommentsResolutions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommentsResolutions";
  } else {
    func.displayName = `PlasmicCommentsResolutions.${nodeName}`;
  }
  return func;
}

export const PlasmicCommentsResolutions = Object.assign(
  // Top-level PlasmicCommentsResolutions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    emailRow: makeNodeComponent("emailRow"),
    atomsCard: makeNodeComponent("atomsCard"),
    commentsComment: makeNodeComponent("commentsComment"),

    // Metadata about props expected for PlasmicCommentsResolutions
    internalVariantProps: PlasmicCommentsResolutions__VariantProps,
    internalArgProps: PlasmicCommentsResolutions__ArgProps,
  }
);

export default PlasmicCommentsResolutions;
/* prettier-ignore-end */
