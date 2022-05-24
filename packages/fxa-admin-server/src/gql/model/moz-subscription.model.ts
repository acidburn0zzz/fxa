/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Field, ObjectType } from '@nestjs/graphql';

/* We can't call this Subscription because it's a reserved word in GQL
 * and autogenerated TS interfaces will be incorrect. */
@ObjectType()
export class MozSubscription {
  @Field()
  public created!: number;

  @Field()
  public currentPeriodEnd!: number;

  @Field()
  public currentPeriodStart!: number;

  @Field()
  public cancelAtPeriodEnd!: boolean;

  @Field({ nullable: true })
  public endedAt?: number;

  @Field()
  public latestInvoice!: string;

  @Field()
  public manageSubscriptionLink?: string;

  @Field()
  public planId!: string;

  @Field()
  public productName!: string;

  @Field()
  public productId!: string;

  @Field()
  public status!: string;

  @Field()
  public subscriptionId!: string;
}
