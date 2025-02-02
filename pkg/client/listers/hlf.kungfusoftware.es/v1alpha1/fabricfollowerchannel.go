// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Code generated by lister-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/kfsoftware/hlf-operator/api/hlf.kungfusoftware.es/v1alpha1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
)

// FabricFollowerChannelLister helps list FabricFollowerChannels.
// All objects returned here must be treated as read-only.
type FabricFollowerChannelLister interface {
	// List lists all FabricFollowerChannels in the indexer.
	// Objects returned here must be treated as read-only.
	List(selector labels.Selector) (ret []*v1alpha1.FabricFollowerChannel, err error)
	// Get retrieves the FabricFollowerChannel from the index for a given name.
	// Objects returned here must be treated as read-only.
	Get(name string) (*v1alpha1.FabricFollowerChannel, error)
	FabricFollowerChannelListerExpansion
}

// fabricFollowerChannelLister implements the FabricFollowerChannelLister interface.
type fabricFollowerChannelLister struct {
	indexer cache.Indexer
}

// NewFabricFollowerChannelLister returns a new FabricFollowerChannelLister.
func NewFabricFollowerChannelLister(indexer cache.Indexer) FabricFollowerChannelLister {
	return &fabricFollowerChannelLister{indexer: indexer}
}

// List lists all FabricFollowerChannels in the indexer.
func (s *fabricFollowerChannelLister) List(selector labels.Selector) (ret []*v1alpha1.FabricFollowerChannel, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.FabricFollowerChannel))
	})
	return ret, err
}

// Get retrieves the FabricFollowerChannel from the index for a given name.
func (s *fabricFollowerChannelLister) Get(name string) (*v1alpha1.FabricFollowerChannel, error) {
	obj, exists, err := s.indexer.GetByKey(name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("fabricfollowerchannel"), name)
	}
	return obj.(*v1alpha1.FabricFollowerChannel), nil
}
