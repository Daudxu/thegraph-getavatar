import {
  NewGravatar as NewGravatarEvent,
  UpdatedGravatar as UpdatedGravatarEvent
} from "../generated/Gravatar/Gravatar"
import { Gravatar } from "../generated/schema"

export function handleNewGravatar(event: NewGravatarEvent): void {
  let gravatar = new Gravatar(event.params.id.toString());
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
 
  gravatar.blockNumber = event.block.number
  gravatar.blockTimestamp = event.block.timestamp
  gravatar.transactionHash = event.transaction.hash
 
  gravatar.save()
}


export function handleUpdatedGravatar(event: UpdatedGravatarEvent): void {
  let id = event.params.id.toString();
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
 
  gravatar.blockNumber = event.block.number
  gravatar.blockTimestamp = event.block.timestamp
  gravatar.transactionHash = event.transaction.hash
 
  gravatar.save()
}