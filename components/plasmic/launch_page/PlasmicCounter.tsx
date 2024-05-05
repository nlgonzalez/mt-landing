// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xRAcoqoeZTpXRdngB2t4Z
// Component: rDLs3mcjlQcD

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: xRAcoqoeZTpXRdngB2t4Z/projectcss
import sty from "./PlasmicCounter.module.css"; // plasmic-import: rDLs3mcjlQcD/css

createPlasmicElementProxy;

export type PlasmicCounter__VariantMembers = {};
export type PlasmicCounter__VariantsArgs = {};
type VariantPropType = keyof PlasmicCounter__VariantsArgs;
export const PlasmicCounter__VariantProps = new Array<VariantPropType>();

export type PlasmicCounter__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCounter__ArgsType;
export const PlasmicCounter__ArgProps = new Array<ArgPropType>("children");

export type PlasmicCounter__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultCounterProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCounter__RenderFunc(props: {
  variants: PlasmicCounter__VariantsArgs;
  args: PlasmicCounter__ArgsType;
  overrides: PlasmicCounter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

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
        sty.root
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2___7Jpk
              )}
            >
              {"32"}
            </h2>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iMBeq
              )}
            >
              {"Days"}
            </div>
          </React.Fragment>
        ),
        value: args.children
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCounter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCounter__VariantsArgs;
    args?: PlasmicCounter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCounter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCounter__ArgsType,
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
          internalArgPropNames: PlasmicCounter__ArgProps,
          internalVariantPropNames: PlasmicCounter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCounter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCounter";
  } else {
    func.displayName = `PlasmicCounter.${nodeName}`;
  }
  return func;
}

export const PlasmicCounter = Object.assign(
  // Top-level PlasmicCounter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCounter
    internalVariantProps: PlasmicCounter__VariantProps,
    internalArgProps: PlasmicCounter__ArgProps
  }
);

export default PlasmicCounter;
/* prettier-ignore-end */
