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

// Code generated by informer-gen. DO NOT EDIT.

package externalversions

import (
	"fmt"

	v1alpha1 "github.com/kfsoftware/hlf-operator/api/hlf.kungfusoftware.es/v1alpha1"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	cache "k8s.io/client-go/tools/cache"
)

// GenericInformer is type of SharedIndexInformer which will locate and delegate to other
// sharedInformers based on type
type GenericInformer interface {
	Informer() cache.SharedIndexInformer
	Lister() cache.GenericLister
}

type genericInformer struct {
	informer cache.SharedIndexInformer
	resource schema.GroupResource
}

// Informer returns the SharedIndexInformer.
func (f *genericInformer) Informer() cache.SharedIndexInformer {
	return f.informer
}

// Lister returns the GenericLister.
func (f *genericInformer) Lister() cache.GenericLister {
	return cache.NewGenericLister(f.Informer().GetIndexer(), f.resource)
}

// ForResource gives generic access to a shared informer of the matching type
// TODO extend this to unknown resources with a client pool
func (f *sharedInformerFactory) ForResource(resource schema.GroupVersionResource) (GenericInformer, error) {
	switch resource {
	// Group=hlf.kungfusoftware.es, Version=v1alpha1
	case v1alpha1.SchemeGroupVersion.WithResource("fabriccas"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricCAs().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricchaincodes"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricChaincodes().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricexplorers"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricExplorers().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricfollowerchannels"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricFollowerChannels().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricidentities"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricIdentities().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricmainchannels"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricMainChannels().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricnetworkconfigs"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricNetworkConfigs().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricoperationsconsoles"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricOperationsConsoles().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricoperatorapis"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricOperatorAPIs().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricoperatoruis"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricOperatorUIs().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricorderernodes"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricOrdererNodes().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricorderingservices"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricOrderingServices().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("fabricpeers"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Hlf().V1alpha1().FabricPeers().Informer()}, nil

	}

	return nil, fmt.Errorf("no informer found for %v", resource)
}
